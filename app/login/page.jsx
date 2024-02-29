"use client";

import Button from "@/components/Button";
import Icon from "@/components/Icon";
import TextInput from "@/components/TextInput";


export default function Login() {
    return (
        <main className="flex flex-col items-center justify-center w-full h-screen">
            <div className="flex flex-col gap-[20px] border border-white-300 bg-white-100 p-[40px] rounded-[20px]">
                <h2>Login</h2>
                <TextInput placeholder="Email" type="email" prefix={<Icon name="account" size={20}/>}/>
                <TextInput placeholder="Password" type="password" prefix={<Icon name="password" size={20}/>}/>
                <Button>Login</Button>
            </div>
        </main>
    )
}