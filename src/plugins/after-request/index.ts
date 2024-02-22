import { AfterRequest } from "./AfterRequest";

export const regexMatch: AfterRequest = (responseText, params)  => {
    //check params contain a rule to match
    if (! params || !params.hasOwnProperty('rule')) {
        throw new Error('No regex rule provided');
    }

    let verdict: boolean | null = null;

    try {
        const match = responseText.match(params.rule);
        verdict = Boolean(match);
    } catch (e:any) {
        return {
            success: false,
            verdict: null,
            errorMessage: JSON.stringify(e.message)
        };
    }

    return {
        success: true,
        verdict,
        errorMessage: null
    };
}

export const exactLengthMatch: AfterRequest = (responseText, params) => {
    if (! params || !params.hasOwnProperty('length')) {
        throw new Error('No length provided');
    }

    const length = parseInt(params.length, 10);
    if (isNaN(length)) {
        throw new Error('Invalid length provided');
    }

    return {
        success: true,
        verdict: responseText.length === length,
        errorMessage: null
    };
}

export const minLength: AfterRequest = (responseText, params) => {
    if (! params || !params.hasOwnProperty('length')) {
        throw new Error('No length provided');
    }

    const length = parseInt(params.length, 10);
    if (isNaN(length)) {
        throw new Error('Invalid length provided');
    }

    return {
        success: true,
        verdict: responseText.length >= length,
        errorMessage: null
    };
}

export const maxLength: AfterRequest = (responseText, params) => {
    if (! params || !params.hasOwnProperty('length')) {
        throw new Error('No length provided');
    }

    const length = parseInt(params.length, 10);
    if (isNaN(length)) {
        throw new Error('Invalid length provided');
    }

    return {
        success: true,
        verdict: responseText.length <= length,
        errorMessage: null
    };
}

export const wordCountMatch: AfterRequest = (responseText, params) => {
    if (! params || !params.hasOwnProperty('count')) {
        throw new Error('No count provided');
    }

    const count = parseInt(params.count, 10);
    if (isNaN(count)) {
        throw new Error('Invalid count provided');
    }

    const words = responseText.split(/\s+/).filter(Boolean).length;
    return {
        success: true,
        verdict: words === count,
        errorMessage: null
    };
}

export const minWordCount: AfterRequest = (responseText, params) => {
    if (! params || !params.hasOwnProperty('count')) {
        throw new Error('No count provided');
    }

    const count = parseInt(params.count, 10);
    if (isNaN(count)) {
        throw new Error('Invalid count provided');
    }

    const words = responseText.split(/\s+/).filter(Boolean).length;
    return {
        success: true,
        verdict: words >= count,
        errorMessage: null
    };
}

export const maxWordCount: AfterRequest = (responseText, params) => {
    if (! params || !params.hasOwnProperty('count')) {
        throw new Error('No count provided');
    }

    const count = parseInt(params.count, 10);
    if (isNaN(count)) {
        throw new Error('Invalid count provided');
    }

    const words = responseText.split(/\s+/).filter(Boolean).length;
    return {
        success: true,
        verdict: words <= count,
        errorMessage: null
    };
}