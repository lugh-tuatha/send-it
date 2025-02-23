import { SignIn } from '@clerk/nextjs'

export default function UserSignIn() {
    return (
        <div className="flex justify-center mt-32">
            <SignIn />
        </div>
    )
}