import {
    STORAGE_handshakeGIF,
    STORAGE_hasAlreadyCrazyHandshaked,
} from "../const";

export default () => {
    const swapImageForGIF = (gif: { dims: number[]; url: string }) => {
        const selfie = document.getElementById("selfie");
        selfie && selfie.classList.remove("invisible");

        const selfieImg = document.querySelector(
            "#selfie > img"
        ) as HTMLElement;

        const gifWidth = gif.dims[0] + "px";
        const gifHeight = gif.dims[1] + "px";

        selfieImg.setAttribute("src", gif.url);
        selfieImg.setAttribute("width", gifWidth);
        selfieImg.setAttribute("height", gifHeight);
    };

    const showThanks = () => {
        const crazyHandshakeButton = document.querySelector(
            "#crazy-handshake-button"
        );
        if (crazyHandshakeButton !== null) {
            crazyHandshakeButton.innerHTML = "Yoh! Thanks for your 🤝";
        }
    };

    const hasAlreadyCrazyHandshaked = localStorage.getItem(
        STORAGE_hasAlreadyCrazyHandshaked
    );
    if (hasAlreadyCrazyHandshaked === null) {
        const hiddeImage = () => {
            const selfieImg = document.querySelector(
                "#selfie > img"
            ) as HTMLElement;
            selfieImg.classList.add("hidden");
        };

        const showImage = () => {
            const selfieImg = document.querySelector(
                "#selfie > img"
            ) as HTMLElement;
            selfieImg.classList.remove("hidden");
        };

        const showMessage = (text: string) => {
            const selfie = document.querySelector("#selfie") as HTMLElement;
            let message = selfie.querySelector(
                "#message"
            ) as HTMLParagraphElement;
            if (message === null) {
                let message = document.createElement("p");
                message.setAttribute("id", "message");
                message.innerText = text;
                message.classList.add("text-primary");
                selfie.appendChild(message);
            } else {
                message.innerText = text;
            }
        };

        const removeMessage = () => {
            const selfie = document.querySelector("#selfie") as HTMLElement;
            const message = selfie.querySelector("#message");
            if (message !== null) {
                selfie.removeChild(message);
            }
        };

        const showSearchingMessage = () =>
            showMessage("Searching the best GIF for you...");

        const showErrorMessage = () => showMessage("Some error occurred ");

        const showGIF = async () => {
            const baseUrl = "https://tenor.googleapis.com/v2/search?";
            const params = {
                q: "crazy handshake",
                key: import.meta.env.PUBLIC_TENOR_API_KEY,
                client_key: import.meta.env.PUBLIC_TENOR_API_CLIENT_ID,
                limit: "1",
                random: "true",
            };

            hiddeImage();
            showSearchingMessage();

            const response = await fetch(
                baseUrl + new URLSearchParams(params),
                {
                    method: "GET",
                }
            );
            if (response.status == 200) {
                const data = await response.json();
                const gif = data.results[0].media_formats.mediumgif;

                swapImageForGIF(gif);

                return new Promise<void>((resolve) => {
                    setTimeout(() => {
                        removeMessage(); // searching message
                        showImage(); // GIF image
                        showThanks();
                        localStorage.setItem(
                            STORAGE_handshakeGIF,
                            JSON.stringify(gif)
                        );
                        resolve();
                    }, 1000);
                });
            }
            return new Promise<void>((resolve) => {
                setTimeout(() => {
                    showErrorMessage();
                    setTimeout(() => {
                        removeMessage(); // error message
                        showImage(); // self image
                        resolve();
                    }, 1000);
                }, 1000);
            });
        };

        const commitHandShake = async () => {
            const response = await fetch(
                `https://api.api-ninjas.com/v1/counter?id=handshakes&hit=true`,
                {
                    method: "GET",
                    headers: {
                        "X-Api-Key": import.meta.env.PUBLIC_API_NINJA_API_KEY,
                    },
                }
            );
            if (response.status === 200) {
                localStorage.setItem(STORAGE_hasAlreadyCrazyHandshaked, "true");
                console.log(
                    "Yeah! Nice handshake! Welcome to the group of crazy handshakers :D"
                );
            }
        };

        const crazyHandshakeButton = document.querySelector(
            "#crazy-handshake-button"
        );
        if (crazyHandshakeButton !== null) {
            crazyHandshakeButton.removeAttribute("disabled");
            crazyHandshakeButton.addEventListener(
                "click",
                async (e) => {
                    e.stopPropagation();
                    (e.target as Element).setAttribute("disabled", "disabled");
                    Promise.all([showGIF(), commitHandShake()]);
                },
                { once: true }
            );
        }
    } else {
        showThanks();
        const gif = localStorage.getItem(STORAGE_handshakeGIF);
        if (gif) {
            swapImageForGIF(JSON.parse(gif));
        }
    }
};
