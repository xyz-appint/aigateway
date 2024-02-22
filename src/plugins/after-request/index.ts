import { AfterRequest } from "./AfterRequest";

export const regexMatch: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        // Check params contain a rule to match
        if (!params || !params.hasOwnProperty('rule')) {
            return reject(new Error('No regex rule provided'));
        }

        let verdict: boolean | null = null;

        try {
            const match = responseText.match(params.rule);
            verdict = Boolean(match);
            resolve({
                success: true,
                verdict,
                errorMessage: null
            });
        } catch (e: any) {
            resolve({
                success: false,
                verdict: null,
                errorMessage: JSON.stringify(e.message)
            });
        }
    });
};

export const exactLengthMatch: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('length')) {
            return reject(new Error('No length provided'));
        }

        const length = parseInt(params.length, 10);
        if (isNaN(length)) {
            return reject(new Error('Invalid length provided'));
        }

        resolve({
            success: true,
            verdict: responseText.length === length,
            errorMessage: null
        });
    });
};

export const minLength: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('length')) {
            return reject(new Error('No length provided'));
        }

        const length = parseInt(params.length, 10);
        if (isNaN(length)) {
            return reject(new Error('Invalid length provided'));
        }

        resolve({
            success: true,
            verdict: responseText.length >= length,
            errorMessage: null
        });
    });
};


export const maxLength: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('length')) {
            return reject(new Error('No length provided'));
        }

        const length = parseInt(params.length, 10);
        if (isNaN(length)) {
            return reject(new Error('Invalid length provided'));
        }

        resolve({
            success: true,
            verdict: responseText.length <= length,
            errorMessage: null
        });
    });
};

export const wordCountMatch: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('count')) {
            return reject(new Error('No count provided'));
        }

        const count = parseInt(params.count, 10);
        if (isNaN(count)) {
            return reject(new Error('Invalid count provided'));
        }

        const words = responseText.split(/\s+/).filter(Boolean).length;
        resolve({
            success: true,
            verdict: words === count,
            errorMessage: null
        });
    });
}

export const minWordCount: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('count')) {
            return reject(new Error('No count provided'));
        }

        const count = parseInt(params.count, 10);
        if (isNaN(count)) {
            return reject(new Error('Invalid count provided'));
        }

        const words = responseText.split(/\s+/).filter(Boolean).length;
        resolve({
            success: true,
            verdict: words >= count,
            errorMessage: null
        });
    });
}

export const maxWordCount: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('count')) {
            return reject(new Error('No count provided'));
        }

        const count = parseInt(params.count, 10);
        if (isNaN(count)) {
            return reject(new Error('Invalid count provided'));
        }

        const words = responseText.split(/\s+/).filter(Boolean).length;
        resolve({
            success: true,
            verdict: words <= count,
            errorMessage: null
        });
    });
}

export const sentenceCountMatch: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('count')) {
            return reject(new Error('No count provided'));
        }

        const count = parseInt(params.count, 10);
        if (isNaN(count)) {
            return reject(new Error('Invalid count provided'));
        }

        const sentences = responseText.split(/[.!?]/).filter(Boolean).length;
        resolve({
            success: true,
            verdict: sentences === count,
            errorMessage: null
        });
    });
}

export const minSentenceCount: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('count')) {
            return reject(new Error('No count provided'));
        }

        const count = parseInt(params.count, 10);
        if (isNaN(count)) {
            return reject(new Error('Invalid count provided'));
        }

        const sentences = responseText.split(/[.!?]/).filter(Boolean).length;
        resolve({
            success: true,
            verdict: sentences >= count,
            errorMessage: null
        });
    });
}

export const maxSentenceCount: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('count')) {
            return reject(new Error('No count provided'));
        }

        const count = parseInt(params.count, 10);
        if (isNaN(count)) {
            return reject(new Error('Invalid count provided'));
        }

        const sentences = responseText.split(/[.!?]/).filter(Boolean).length;
        resolve({
            success: true,
            verdict: sentences <= count,
            errorMessage: null
        });
    });
}

export const contains: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('text')) {
            return reject(new Error('No text provided'));
        }

        resolve({
            success: true,
            verdict: responseText.includes(params.text),
            errorMessage: null
        });
    });
}

export const containsAny: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('text')) {
            return reject(new Error('No text provided'));
        }

        const texts = params.text.split(',');
        resolve({
            success: true,
            verdict: texts.some(text => responseText.includes(text)),
            errorMessage: null
        });
    });
}

export const containsAll: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('text')) {
            return reject(new Error('No text provided'));
        }

        const texts = params.text.split(',');
        resolve({
            success: true,
            verdict: texts.every(text => responseText.includes(text)),
            errorMessage: null
        });
    });
}

export const notContains: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('text')) {
            return reject(new Error('No text provided'));
        }

        resolve({
            success: true,
            verdict: !responseText.includes(params.text),
            errorMessage: null
        });
    });
}

export const notContainsAny: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('text')) {
            return reject(new Error('No text provided'));
        }

        const texts = params.text.split(',');
        resolve({
            success: true,
            verdict: !texts.some(text => responseText.includes(text)),
            errorMessage: null
        });
    });
}

export const notContainsAll: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('text')) {
            return reject(new Error('No text provided'));
        }

        const texts = params.text.split(',');
        resolve({
            success: true,
            verdict: !texts.every(text => responseText.includes(text)),
            errorMessage: null
        });
    });
}

export const startsWith: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('text')) {
            return reject(new Error('No text provided'));
        }

        resolve({
            success: true,
            verdict: responseText.startsWith(params.text),
            errorMessage: null
        });
    });
}

export const endsWith: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('text')) {
            return reject(new Error('No text provided'));
        }

        resolve({
            success: true,
            verdict: responseText.endsWith(params.text),
            errorMessage: null
        });
    });
}

export const isNumeric: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        resolve({
            success: true,
            verdict: !isNaN(parseFloat(responseText)) && isFinite(parseFloat(responseText)),
            errorMessage: null
        });
    });
}

export const isAlpha: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        resolve({
            success: true,
            verdict: /^[a-zA-Z]+$/.test(responseText),
            errorMessage: null
        });
    });
}

export const isAlphaNumeric: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        resolve({
            success: true,
            verdict: /^[a-zA-Z0-9]+$/.test(responseText),
            errorMessage: null
        });
    });
}

export const matchFormat: AfterRequest = (responseText, params) => {
    return new Promise((resolve, reject) => {
        if (!params || !params.hasOwnProperty('format')) {
            return reject(new Error('No format provided'));
        }

        const format = params.format;
        switch (format) {
            case ' csv':
                resolve({
                    success: true,
                    verdict: /^(\s*[\w\s]+\s*(,\s*[\w\s]+\s*)*)*$/.test(responseText),
                    errorMessage: null
                });
                break;
            case 'json':
                try {
                    JSON.parse(responseText);
                    resolve({
                        success: true,
                        verdict: true,
                        errorMessage: null
                    });
                } catch (e: any) {
                    resolve({
                        success: true,
                        verdict: false,
                        errorMessage: JSON.stringify(e.message)
                    });
                }
                break;
            case 'markdown':
                resolve({
                    success: true,
                    verdict: /^#+\s+.+$/.test(responseText),
                    errorMessage: null
                });
                break;
            case 'html':
                resolve({
                    success: true,
                    verdict: /<[^>]+>/.test(responseText),
                    errorMessage: null
                });
                break;
            case 'xml':
                resolve({
                    success: true,
                    verdict: /<[^>]+>/.test(responseText),
                    errorMessage: null
                });
                break;
            case 'yaml':
                resolve({
                    success: true,
                    verdict: /---/.test(responseText),
                    errorMessage: null
                });
                break;
            default:
                return reject(new Error('Invalid format provided'));
        };
    });
};


