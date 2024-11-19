"use client"

import { useState } from "react"

export default function ClientPage() {
    const [result, setResult] = useState("")

    return (
        <div className="flex flex-col items-center justify-center mt-48">
            <h1 className="text-4xl sm:text-5xl mb-5 text-center text-balance mx-5">Subscribe to our Newsletter!</h1>
            <form onSubmit={async (e) => {
                e.preventDefault()

                const form = e.target as HTMLFormElement

                const response = await fetch("/api/sheets", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: form.email.value })
                })

                form.reset()

                const data = await response.json()

                console.log(data)

                setResult(data.message)
            }}
                className="flex flex-wrap items-center gap-3 justify-center mx-10">
                
                <input name="email" placeholder={result ? result : "Email:"} className="sm:text-xl text-[#454659] placeholder-[#6D6E80] bg-[#ede4d5] border-[#C8C8C8] rounded-lg text-center p-2 px-5 w-[250px] sm:w-[300px]" />
                <button type="submit" className="sm:text-xl text-[#ffecec] border w-fit rounded-lg bg-[#7acad4] hover:bg-[#7aa8d4] p-2 px-4 ">Subscribe</button>
            </form>
            <h1 className="sm:text-xl"></h1>
        </div>
    )
}