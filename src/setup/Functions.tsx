export const checkLogin = ({router}: { router: any }) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        // User is signed in.
        console.log("User is signed in.");
        // go to home page
        router.navigate("/");
    } else {
        // No user is signed in.
        console.log("No user is signed in.");
        router.navigate("/login");
    }
};
