import useTitle from "../../hooks/useTitle";

const Blog = () => {
   //adding dynamic title
   useTitle("Blog")
   return (
      <div className="py-12 px-5 md:px-12">
         <div className="md:w-3/4 mb-5">
            <h3 className="text-2xl md:text-2xl font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            <p className="mt-4 text-md text-gray-600">Access token varifies users.If a user has access toke he/she will have access to proteced resources.It has expiration time.After the expiration time end.user can get new access token with a request.</p>
            <p className="mt-4 text-md text-gray-600">Refresh token is a credential used to get a new access token after the current access token expires.</p>
            <p className="mt-4 text-md text-gray-600">Access tokens and refresh tokens should be securely stored on the client-side to prevent unauthorized access.Recommended approach is to store the  tokens in an HTTP-only cookie.But we can store them in the localstorage of browser.</p>
         </div>

         <div className="md:w-3/4 mb-5">
            <h3 className="text-2xl md:text-2xl font-bold">Compare SQL and NoSQL databases?</h3>
            <p className="mt-4 text-md text-gray-600">SQL databases provide structured and consistent data storage with support for complex queries, while NoSQL databases offer flexibility, scalability, and high availability for unstructured or evolving data needs.</p>
         </div>

         <div className="md:w-3/4 mb-5">
            <h3 className="text-2xl md:text-2xl font-bold">What is express js? What is Nest JS?</h3>
            <p className="mt-4 text-md text-gray-600">Express.js is a  web application framework for Node.js.Express.js will help us to organize out application better and it also provide us many features.</p>
            <p className="mt-4 text-md text-gray-600">Nest.js is a progressive Node.js framework for building efficient, scalable, and modular server-side applications using TypeScript.</p>
         </div>

         <div className="md:w-3/4 mb-5">
            <h3 className="text-2xl md:text-3xl font-bold">What is MongoDB aggregate and how does it work?</h3>
            <p className="mt-4 text-md text-gray-600">In MongoDB, the aggregate operation is used to perform data processing and analysis tasks on the data stored in a collection. It allows you to perform complex queries, transformations, and aggregations on the data.
            The aggregate operation takes an array of stages that define various operations to be executed sequentially. Each stage performs a specific data processing task, such as filtering, grouping, sorting, projecting, or performing mathematical operations.</p>
         </div>
      </div>
   );
};

export default Blog;