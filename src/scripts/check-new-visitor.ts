import { STORAGE_hasAlreadyVisited } from "../const";

export default () => {
    if (localStorage.getItem(STORAGE_hasAlreadyVisited) === null) {
        fetch(`https://api.api-ninjas.com/v1/counter?id=visits&hit=true`, {
            method: "GET",
            headers: {
                "X-Api-Key": import.meta.env.PUBLIC_API_NINJA_API_KEY,
            },
        }).then((response) => {
            if (response.status === 200) {
                localStorage.setItem(STORAGE_hasAlreadyVisited, "true");
                console.log("Whatsup! Welcome to my personal website!");
            } else {
                console.log("Whoops! Come back later!");
            }
        });
    }
};
