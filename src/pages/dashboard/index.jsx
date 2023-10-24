import { useStore } from "@state/useStore"

const Dashboard = () => {
    const authToken = useStore((state) => state.authToken);
    return (
        <div>{authToken}</div>
    )
}

export default Dashboard