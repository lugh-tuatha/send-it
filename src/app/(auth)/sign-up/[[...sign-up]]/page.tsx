import { SignUp } from '@clerk/nextjs'

export default function UserSignUp() {
    return (
        <div className="flex justify-center mt-32">
            <SignUp />
        </div>
    )
}