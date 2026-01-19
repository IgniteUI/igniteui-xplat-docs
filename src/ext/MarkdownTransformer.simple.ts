import { APIPlatform } from './MappingLoader';
import { SimpleApiResolver } from './SimpleApiResolver';
// Use require instead of import for unist-util-visit
const visit = require('unist-util-visit');

function transformCodeRefs(options: any) {
    const resolver = new SimpleApiResolver(getPlatformName(options.platform));
    
    // Extract component name from file path
    const componentContext = extractComponentFromPath(options.filePath);

    function transformRef(node: any, index: number, parent: any) {
        if (node.type !== 'inlineCode') return;
        
        const value = node.value;
        
        // Check if this is an API reference
        if (!value.startsWith('@api:')) return;
        
        // Resolve to platform-specific URL with component context
        const url = resolver.resolveApiLink(value, componentContext);
        
        // Extract display text (remove @api: prefix)
        const displayText = value.replace(/@api:(?:enum|interface|type:)?/, '');
        
        // Create link node
        const link = {
            type: "link",
            url: url,
            children: [{
                type: "inlineCode",
                value: displayText
            }]
        };
        
        parent.children.splice(index, 1, link);
    }

    return function (tree: any) {
        console.log('Transforming code refs in markdown for platform:', options.platform);
        console.log('Using component context:', componentContext);
        console.log(tree);
        visit(tree, 'inlineCode', transformRef);
    }
}

function extractComponentFromPath(filePath: string): string | undefined {
    // Extract component name from file path
    // e.g., "c:\Work\igniteui-xplat-docs\doc\en\components\grid.md" => "Grid"
    const match = filePath.match(/components[\/\\]([^\/\\]+)\.md$/);
    if (match) {
        const fileName = match[1];
        // Convert kebab-case to PascalCase
        return fileName.split('-')
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join('');
    }
    return undefined;
}

function getPlatformName(platform: APIPlatform): string {
    // Map platform codes to config keys
    const platformMap: Record<string, string> = {
        [APIPlatform.Angular]: 'Angular',
        [APIPlatform.React]: 'React',
        [APIPlatform.WebComponents]: 'WebComponents',
        [APIPlatform.Blazor]: 'Blazor'
    };
    
    return platformMap[platform] || platform.toString();
}

export { transformCodeRefs };