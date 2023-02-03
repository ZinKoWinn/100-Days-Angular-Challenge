export class StringUtils {
    public static toPascalCase(str: string): string {
        return str.replace(/\w+/g, (s) => s[0].toUpperCase() + s.slice(1).toLowerCase());
    }
}
