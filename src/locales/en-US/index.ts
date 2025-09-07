import inferenceExamples from "src/pages/onboarding/sections/4_PassionateMembers/inference/inferenceExamples";
import toyProjects from "src/pages/onboarding/sections/4_PassionateMembers/toyProjects/toyProjectExamples";
import smallGatheringExamples from "src/pages/onboarding/sections/6_SmallGathering/smallGatheringExamples";
import positionCards from "src/pages/onboarding/sections/7_ApplyInfoteam/positionsCards";
import _members from "src/store/members";

export const main = {
  title: "Hello, World!",

  navbar: {
    aboutTeam: "About Team",
    members: "Members",
    projects: "Projects",
    faq: "FAQ",
    bugReport: "Bug Report",
  },

  onboarding: {
    introduction: {
      infoteamIs: "The Infoteam",
      codeCampus: "improves the campus with code",
      descriptions: {
        one: "The Infoteam is a group of people who are interested in development and have come together to make GIST a better and more enjoyable place to live.",
        two: "For some, the fun may come from writing sophisticated code; for others, it might be from creating beautiful services; and for others, it could be from seeing many people use their service.",
        three:
          "Our goal is to bring together these passionate individuals, allowing them to work hard based on their own interests and create amazing services.",
      },
    },
    coolDevCulture: {
      asADevGroup: "As a developer group,",
      leadsCool: "We lead a cool development culture.",
      slackGithubCollab: "Co-op based on Slack & Github",
      illustAlt:
        "Infoteam communicating through Slack and collaborating based on Github Issues and Pull Requests",
    },
    passionateMembers: {
      title: "Team members who are truly passionate about development",
      inference: {
        title: "Inference: The Infoteam Conference",
        subtitle:
          "A conference-like event where we share our development experiences",
        inferenceLogo: "INFERENCE",
        description:
          "We share how we develop even we are in different project teams. <br /> Through Inference, team members gain new technical inspiration and also gain perspectives from different roles.",
        examples: inferenceExamples.map((inferenceExample) => ({
          id: inferenceExample.id,
          title: inferenceExample.title.en,
          presentersId: inferenceExample.presentersId,
          description: inferenceExample.description.en,
        })),
      },
      toyProjects: {
        title: "Toy projects we do just because we want to",
        subtitle: '"Wouldn\'t it be really fun to make something like this?"',
        examples: toyProjects.map((toyProject) => ({
          id: toyProject.id,
          title: toyProject.title.en,
          intendersId: toyProject.intendersId,
          description: toyProject.description.en,
          thumbnail: toyProject.thumbnail,
        })),
      },
    },
    ziggleIntroduction: {
      title: "Gathering All the GIST Notices",
      tryNow: "Try it out now",
      webScreenshotAlt: "Screenshot of Ziggle Web Main Page",
      mobileScreenshotAlt: "Screenshot of Ziggle Mobile Main Page",
      description: {
        title:
          "Ziggle was developed to improve the convenience of GIST campus notices.",
        content1:
          "Before Ziggle, all GIST campus notices were delivered through KakaoTalk. <br /> As a result, it was difficult to view notices at a glance, and modifying notices was also challenging. <br /> Additionally, users had to be invited to each chat room to receive notices.",
        content2:
          "To improve this inconvenient user experience, the Infoteam developed the 'Ziggle' notice service in 2023. <br /> Throughout the development process, we incorporated various user feedback and continuously improved the service, <br /> leading to the completion of the current Ziggle.",
      },
      wantToSeeMore: "Want to see more of Infoteam's projects?",
      goSeeProjectButton: "Project Introductions",
    },
    smallGathering: {
      notOnlyDev: "Not Just Development",
      doVariousActivities: "We Do Various Activities",
      title: "Let's Have Fun Together, Small Gatherings",
      examples: smallGatheringExamples.map((smallGatheringExample) => ({
        id: smallGatheringExample.id,
        title: smallGatheringExample.title.en,
        description: smallGatheringExample.description.en,
        image: smallGatheringExample.image,
      })),
      etc: "+ go out for meal, play games, exercise, etc.",
    },
    applyInfoteam: {
      title: "If you like the Infoteam",
      subtitle: "We always welcome talented individuals.",
      positionCards: positionCards.map((positionCard) => ({
        title: positionCard.title,
        subtitle: positionCard.subtitle,
        description: positionCard.description.en,
        link: positionCard.link,
        bgColor: positionCard.bgColor,
      })),
      goApplyButton: "Apply to Infoteam",
    },
  },
};

export const members = _members.map((member) => ({
  id: member.id,
  name: member.name.en,
  githubId: member.githubID,
  role: member.roles,
  introduction: member.introduction.en,
  profileImage: member.profileImage,
  intendedProjects: member.intendedProjects,
}));
