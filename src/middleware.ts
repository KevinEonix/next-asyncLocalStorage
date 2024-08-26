import {getStore, runWithStore} from "@/storage";
import {NextResponse} from "next/server";

export const config = {
    matcher: [
        '/'
    ]
}

export default async function middleware() {
    return await runWithStore(new Map<string, string>(), async () => {
        console.log('--- start middleware')
        const store = getStore()

        store?.set('test', 'test value')

        console.log('store is ', store)
        console.log('test value in store is ', store?.get('test'))

        console.log('--- end middleware')
        return NextResponse.next()
    })
}