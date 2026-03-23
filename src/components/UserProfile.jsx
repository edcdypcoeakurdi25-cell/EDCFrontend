export const UserProfile = () => {
    let userName = "Admin User";
    let userRole = "Leader";

    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            if (user.name) userName = user.name;
            if (user.role) userRole = user.role.charAt(0).toUpperCase() + user.role.slice(1).toLowerCase();
        }
    } catch (e) {
        console.error("Failed to parse user from local storage.");
    }

    return (
        <div className="flex items-center gap-x-3">
            <div className="h-10 w-10 shrink-0 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
                {userName.charAt(0)}
            </div>
            <div className="flex flex-col items-start">
                <h2 className="text-[15px] font-medium">{userName}</h2>
                <p className="text-sm text-zinc-400">{userRole}</p>
            </div>
        </div>
    );
}
