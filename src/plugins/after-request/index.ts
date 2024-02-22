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