// tslint:disable-next-line:interface-name
export interface Tuling123Response {
    intent: {
        actionName: string,
        code: number,
        intentName: string,
    },
    results: Array<{
        groupType: number,
        resultType: string,
        values: {
            text: string
        }
    }>
}