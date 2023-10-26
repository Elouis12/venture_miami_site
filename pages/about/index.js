import {Container} from '../../components/container'
import {Hero} from '../../components/about/Hero'
import {Team} from '../../components/about/Team'
import Layout from '../../components/layout'
import Head from 'next/head'
import {Client} from '../../lib/contentful'
import {Partnerships} from "../../components/about/Partnerships";
import Community from "../../components/about/Community";
import {Achievements} from "../../components/about/Achievements";
import Values from "../../components/about/Values";
import Stats from "../../components/about/Stats";

export default function Index(props) {

    return (
        <Layout content={props.footer}>
            <Head>
                <title>Venture Miami - Team</title>
            </Head>
            <Container>
                <Hero content={props.heroSection}/>
                <Stats content={props.statsSection}/>
                <Community content={props.communitySection}/>
                <Achievements content={props.achievementsSection}/>
                {/*<Values/>*/}
                <Team content={props.teamSection}/>
                <Partnerships content={props.partnersSection}/>
            </Container>
        </Layout>
    )
}

export async function getStaticProps() {


    // about page
    const aboutPageEntry = await Client.getEntry("6tHurDmzti6EYjCOCb9qLD", {include: 10});

    // hero section
    const hero = aboutPageEntry.fields.heroSection;
    const heroSection = (await Client.getEntry(hero.sys.id, {include: 10})).fields;

    // achievement section
    const achievements = aboutPageEntry.fields.achievementsSection;
    const achievementsSection = (await Client.getEntry(achievements.sys.id, {include: 10})).fields;

    // community section
    const community = aboutPageEntry.fields.communitySection;
    const communitySection = (await Client.getEntry(community.sys.id, {include: 10})).fields;

    // stats section
    const stats = aboutPageEntry.fields.statsSection;
    const statsSection = (await Client.getEntry(stats.sys.id, {include: 10})).fields;

    // team section
    const team = aboutPageEntry.fields.teamSection;
    const teamSection = (await Client.getEntry(team.sys.id, {include: 10})).fields;

    // advisors section
    const advisors = aboutPageEntry.fields.advisorsSection;
    const advisorsSection = (await Client.getEntry(advisors.sys.id, {include: 10})).fields;

    // partners section
    const partners = aboutPageEntry.fields.partnersSection;
    const partnersSection = (await Client.getEntry(partners.sys.id, {include: 10})).fields;

    // footer
    const footer = await Client.getEntry('6ismKzbJGVMc3w7KWoEvfA')

    return {
        props: {
            heroSection: heroSection,
            statsSection: statsSection,
            communitySection: communitySection,
            achievementsSection: achievementsSection,
            teamSection: [teamSection, advisorsSection],
            partnersSection: partnersSection,
            footer: footer.fields
        }
    }
}
