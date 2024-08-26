import {AsyncLocalStorage} from "node:async_hooks";
import {NextResponse} from "next/server";

type StoreContent = Map<string,string>


export const storage = new AsyncLocalStorage<StoreContent>();

export const getStore = () => storage.getStore();

export const runWithStore = (store: StoreContent, callback: () => Promise<NextResponse>) => storage.run(new Map<string, string>(), callback)