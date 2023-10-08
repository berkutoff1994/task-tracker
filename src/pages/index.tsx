import { Header } from "common/components/Header";
import { TicketsBlock } from "features/main/components/TicketsBlock";
import { Container } from "layouts/Container";
import { PageContent } from "layouts/PageContent";

const MainPage = () => {
    return (
        <div>
            <Header />
            <PageContent>
                <Container>
                    <TicketsBlock />
                </Container>
            </PageContent>
        </div>
    );
}

export default MainPage;