export default {
    editor: {
        label: {
            en: "Skeleton Loader",
        },
        icon: "cursor-click",
    },
    properties: {
        loaderWidth: {
            label: {
                en: "Loader Width",
            },
            type: "Length",
            options: {
                unitChoices: [
                    { value: "px", label: "px" },
                    { value: "%", label: "%" },
                ],
            },
            responsive: true,
            defaultValue: "300px",
        },
        loaderHeight: {
            label: {
                en: "Loader Height",
            },
            type: "Length",
            options: {
                unitChoices: [
                    { value: "px", label: "px" },
                    { value: "%", label: "%" },
                ],
            },
            responsive: true,
            defaultValue: "30px",
        },
        borderRadius: {
            label: {
                en: "Corner Roundness",
            },
            type: "Length",
            options: {
                unitChoices: [
                    { value: "px", label: "px" },
                    { value: "%", label: "%" },
                ],
            },
            defaultValue: "5px",
        },
        backgroundColor: {
            label: {
                en: "Loader Color",
            },
            type: "Color",
            defaultValue: "#c0c0c0",
        },
    },
};
