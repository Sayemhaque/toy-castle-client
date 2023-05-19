import useTitle from "../../hooks/useTitle";

const Blog = () => {
     //adding dynamic title
  useTitle("Blog")
    return (
        <div className="py-12 px-5 md:px-12">
             <div className="md:w-3/4 mb-5">
                <h3 className="text-2xl md:text-4xl text-bold">What is Express js ?</h3>
                <p className="mt-4 text-md text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam qui dolores officiis veritatis molestiae. Minus beatae consequuntur laboriosam ex accusamus perspiciatis sed. Aspernatur accusamus quis a laudantium ipsum perspiciatis sit!</p>
             </div>

             <div className="md:w-3/4 mb-5">
                <h3 className="text-2xl md:text-4xl text-bold">What is Express js ?</h3>
                <p className="mt-4 text-md text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam qui dolores officiis veritatis molestiae. Minus beatae consequuntur laboriosam ex accusamus perspiciatis sed. Aspernatur accusamus quis a laudantium ipsum perspiciatis sit!</p>
             </div>

             <div className="md:w-3/4 mb-5">
                <h3 className="text-2xl md:text-4xl text-bold">What is Express js ?</h3>
                <p className="mt-4 text-md text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam qui dolores officiis veritatis molestiae. Minus beatae consequuntur laboriosam ex accusamus perspiciatis sed. Aspernatur accusamus quis a laudantium ipsum perspiciatis sit!</p>
             </div>

             <div className="md:w-3/4 mb-5">
                <h3 className="text-2xl md:text-4xl text-bold">What is Express js ?</h3>
                <p className="mt-4 text-md text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam qui dolores officiis veritatis molestiae. Minus beatae consequuntur laboriosam ex accusamus perspiciatis sed. Aspernatur accusamus quis a laudantium ipsum perspiciatis sit!</p>
             </div>
        </div>
    );
};

export default Blog;