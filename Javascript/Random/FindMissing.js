const first = [
    {
        id: "6x5_k1sVmU",
        type: "header",
        data: { text: "Where did WebSQL go?", level: 1 },
    },
    {
        id: "4AbwH9gQL9",
        type: "image",
        data: {
            file: {
                url: "https://adilrion.com/v2/resize:fit:875/1*_2_tLrE4b3p9VXmPOgvk9Q.png",
            },
            caption: "this image",
            withBorder: false,
            stretched: false,
            withBackground: false,
        },
    },
    {
        id: "IZOnOAakAc",
        type: "image",
        data: {
            file: {
                url: "https://quciklkeha.s3.eu-west-2.amazonaws.com/2314628ac2f95d9b24583160ce600790-Beige%20Mock%20Up%20Design%20for%20Online%20Store%20Launch%20%28Video%29.png",
            },
            caption: "this is the image",
            withBorder: false,
            stretched: false,
            withBackground: false,
        },
    },
    {
        id: "iM5ziPHv20",
        type: "image",
        data: {
            file: {
                url: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*84keh_Wf3G9sNApB.png",
            },
            caption: "kjgdf",
            withBorder: false,
            stretched: false,
            withBackground: false,
        },
    },
    {
        id: "C3crEeUnEM",
        type: "image",
        data: {
            file: {
                url: "https://quciklkeha.s3.eu-west-2.amazonaws.com/rioadilrionda7f87f7e1df7aad8cee-r4.png",
            },
            caption: "gdfgd",
            withBorder: false,
            stretched: false,
            withBackground: false,
        },
    },
    {
        id: "C3crEeUnEM",
        type: "image",
        data: {
            file: {
                url: "https://quciklkeha.s3.eu-west-2.amazonaws.com/kabul-mahmoud-r4.png",
            },
            caption: "gdfgd",
            withBorder: false,
            stretched: false,
            withBackground: false,
        },
    },
];

const second = [
    {
        id: "6x5_k1sVmU",
        type: "header",
        data: { text: "Where did WebSQL go?", level: 1 },
    },
    {
        id: "4AbwH9gQL9",
        type: "image",
        data: {
            file: {
                url: "https://miro.medium.com/v2/resize:fit:875/1*_2_tLrE4b3p9VXmPOgvk9Q.png",
            },
            caption: "this image",
            withBorder: false,
            stretched: false,
            withBackground: false,
        },
    },
    {
        id: "IZOnOAakAc",
        type: "image",
        data: {
            file: {
                url: "https://quciklkeha.s3.eu-west-2.amazonaws.com/2314628ac2f95d9b24583160ce600790-Beige%20Mock%20Up%20Design%20for%20Online%20Store%20Launch%20%28Video%29.png",
            },
            caption: "this is the image",
            withBorder: false,
            stretched: false,
            withBackground: false,
        },
    },
    {
        id: "iM5ziPHv20",
        type: "image",
        data: {
            file: {
                url: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*84keh_Wf3G9sNApB.png",
            },
            caption: "kjgdf",
            withBorder: false,
            stretched: false,
            withBackground: false,
        },
    },
    {
        id: "C3crEeUnEM",
        type: "image",
        data: {
            file: {
                url: "https://quciklkeha.s3.eu-west-2.amazonaws.com/2bd1f88b1d58da7f87f7e1df7aad8cee-r4.png",
            },
            caption: "gdfgd",
            withBorder: false,
            stretched: false,
            withBackground: false,
        },
    },
    {
        id: "C3crEeUnEM",
        type: "image",
        data: {
            file: {
                url: "https://quciklkeha.s3.eu-west-2.amazonaws.com/skdflskjflskjflksj-r4.png",
            },
            caption: "gdfgd",
            withBorder: false,
            stretched: false,
            withBackground: false,
        },
    },
];

function findMissingUrl(firstArray, secondArray) {
   const isDomainUrl = (url) =>
       url?.startsWith("https://quciklkeha.s3.eu-west-2.amazonaws.com");

   const firstUrls = firstArray
       .map((item) => item?.data?.file?.url)
       .filter(isDomainUrl);
   const secondUrls = secondArray
       .map((item) => item?.data?.file?.url)
       .filter(isDomainUrl);

   const missingUrls = [];

   for (const url of firstUrls) {
       if (!secondUrls.includes(url)) {
           missingUrls.push(url);
       }
   }

   return missingUrls;
}

console.log(findMissingUrl(first, second)); // https://quciklkeha.s3.eu-west-2.amazonaws.com/rioadilrionda7f87f7e1df7aad8cee-r4.png
