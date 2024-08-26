import {getStore} from "@/storage";

export default async function Home() {
  const store = getStore()

    if (store === undefined) {
        return <main className="w-full h-full flex items-center justify-center">
            <h1>Store is undefined :(</h1>
        </main>
    }

    return (
        <main className="w-full h-full flex items-center justify-center">
            <h1>test value in store is {store?.get('test') || 'get test returns undefined :('}</h1>
      </main>
  );
}
