import axios from 'axios';
import {Tuling123Response} from 'responses/tuling123.response';
import {logger} from '../logger';

export enum Bot {
    TULING
}

const tuling123 = async (message: string): Promise<string> => {

    logger.info(`http://openapi.tuling123.com/openapi/api/v2?message=${message}`);

    return await axios.request<Tuling123Response>({
        url: 'http://openapi.tuling123.com/openapi/api/v2',
        method: 'post',
        data: {
            reqType: 0,
            perception: {
                inputText: {
                    text: message,
                }
            },
            userInfo: {
                apiKey: 'ed8cba8088a9460fa08ccf259c502e53',
                userId: '313644',
            }
        },
    }).then((r) => r.data.results[0].values.text);
}

export default async function (message: string, bot: Bot): Promise<string> {
    switch (bot) {
        case Bot.TULING:
            return await tuling123(message);
        default:
            return '!!(>o<)!!'
    }
}