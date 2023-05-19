import useTitle from "../../hooks/useTitle";

const PageNotFound = () => {
    useTitle("Error page")
    return (
        <div className="h-screen w-full">
            <img className="h-screen w-full" src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?w=740&t=st=1684518342~exp=1684518942~hmac=a2332f331100983c43faaa8d4475475f73b55e8b23ab56df39108bbbf97393c1" alt="" />
        </div>
    );
};

export default PageNotFound;