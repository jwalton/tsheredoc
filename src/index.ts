// Remove leading indents from a multi-line string.
function stringToHeredoc(value: string) {
    let addNewline = false;
    const lines = value.split('\n');
    if (lines.length > 0 && lines[0] === '') {
        lines.shift();
    }
    if (lines.length > 0 && lines[lines.length - 1].trim() === '') {
        lines.pop();
        addNewline = true;
    }

    const indents = lines.map((line) => line.search(/[^ ]/)).filter((n) => n >= 0);
    const minIndentLength = Math.min(...indents);
    return lines.map((line) => line.slice(minIndentLength)).join('\n') + (addNewline ? '\n' : '');
}

function renderStringTemplate(strings: TemplateStringsArray, ...values: string[]): string {
    let result = '';
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += `${values[i]}`;
        }
    }

    return result;
}

/**
 * Remove leading indents from a multi line string.
 *
 * @example
 *     const val = heredoc`
 *         test
 *         test
 *     `; // val == "test\ntest\n"
 *
 *     const val2 = heredoc(`
 *         test
 *         test
 *     `); // val2 == "test\ntest\n"
 */
export default function heredoc(value: TemplateStringsArray, ...values: any[]): string;
export default function heredoc(value: string): string;
export default function heredoc(value: TemplateStringsArray | string, ...values: any[]): string {
    if (typeof value === 'string') {
        return stringToHeredoc(value);
    } else {
        return stringToHeredoc(renderStringTemplate(value, ...values));
    }
}
