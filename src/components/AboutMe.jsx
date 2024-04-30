import React from "react";

export default function AboutMe() {
    const [profilePicture, setProfilePicture] = React.useState("");

    React.useEffect(() => {
        fetch("https://api.github.com/users/WhoIsDanix")
            .then(resp => resp.json())
            .then(result => setProfilePicture(result.avatar_url));
    }, []);

    return (
        <main className="flex flex-col justify-center items-center mt-10">
            <img className="rounded-full w-40" src={profilePicture} alt="" />
            <h1 className="mt-5 text-3xl">WhoIsDanix</h1>
            <h4 className="mt-1 text-lg">A programmer who's trying to do something</h4>
        </main>
    );
}
