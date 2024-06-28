import ToduContainer from "@/components/todu/ToduContainer";
import Container from "@/components/ui/Container";


const Todu = () => {
    return (
        <Container>
            <h1 className="text-indigo-500 text-3xl font-semibold text-center p-4">Todu  React App</h1>
            <ToduContainer/>
        </Container>
    );
};

export default Todu;