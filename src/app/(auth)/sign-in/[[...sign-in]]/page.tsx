import { SignIn } from '@clerk/nextjs'

export default function UserSignIn() {
    return (
        <div className="flex justify-center mt-8">
            <SignIn />
        </div>
    )
}