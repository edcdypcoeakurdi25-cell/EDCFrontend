import { UserProfile } from './UserProfile';

export const Sidebar = () => {
    return (
        <aside className="w-72 bg-gray-50 h-screen px-4 py-2">
            <UserProfile />
        </aside>
    );
};
