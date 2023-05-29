export class StringFunctions {
    public static Capitalize(value: string) : string {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
}