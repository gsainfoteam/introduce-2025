import inferenceExamples from "src/pages/onboarding/sections/4_PassionateMembers/inference/inferenceExamples";
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
