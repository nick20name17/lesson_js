import { ProfileForm } from '../components/profile-form'
import { ProfileInfo } from '../components/profile-info'
import { useUserName } from '../context/user-name-context'

export const Profile = () => {
    const { userName, setUserName } = useUserName()

    return (
        <section className="container mt-20 space-y-10">
            <ProfileInfo userName={userName} />
            <ProfileForm
                setUserName={setUserName}
                userName={userName}
            />
        </section>
    )
}
