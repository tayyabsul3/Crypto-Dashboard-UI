import { Grid, GridItem } from "@chakra-ui/react";
import Dashboardlayout from "../components/dashboardlayout";
import Portfolio from "./components/portfolio";
import Currentprice from "./components/currentprice";
import RecentTransactions from "./components/recentTransactions";
import BottomCard from "./components/bottomCard";

const Dashboard = () => {
  return (
    <Dashboardlayout title="DASHBOARD" >
      <Grid gap={"10"} maxH={"calc(100vh - 100px)"} overflowX={"hidden"} overflowY={"auto"}>
        <GridItem colSpan="2">
          <Portfolio />
        </GridItem>
        <GridItem
          colSpan={{
            base: "2",
            xl: "1",
          }}
        >
          <Currentprice />
        </GridItem>
        <GridItem
          colSpan={{
            base: "2",
            xl: "1",
          }}
        >
          <RecentTransactions />
        </GridItem>
        <GridItem colSpan={{
            base: "2",
            xl: "1",
          }}>
          <BottomCard
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            tag="Loans"
            imgurl="./dot_bg.svg"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={{
            base: "2",
            xl: "1",
          }}>
          <BottomCard
            text="Learn more about our real estate, mortgage, and  corporate account services"
            tag="Contact"
            imgurl="./grid_bg.svg"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </Dashboardlayout>
  );
};

export default Dashboard;
