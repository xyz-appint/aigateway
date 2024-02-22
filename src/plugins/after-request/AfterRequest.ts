export type afterRequestPluginOutput = {
    success: boolean | null,
    errorMessage: string | null,
    verdict: boolean | null
}

export interface AfterRequest {
    (responseText: string, params?: Record<string, string>): Promise<afterRequestPluginOutput>;
}

