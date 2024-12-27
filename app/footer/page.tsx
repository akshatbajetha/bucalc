import LinkedInLight from "@/public/logos/LinkedInLight.png";
import LinkedInDark from "@/public/logos/LinkedInDark.png";
import TwitterLight from "@/public/logos/TwitterLight.png";
import TwitterDark from "@/public/logos/TwitterDark.png";
import GithubLight from "@/public/logos/GithubLight.png";
import GithubDark from "@/public/logos/GithubDark.png";
import { Separator } from "@/components/ui/separator";
function Footer() {
  const lightLinks = [
    {
      link: "https://www.linkedin.com/in/akshat-bajetha",
      logo: LinkedInLight,
    },
    {
      link: "https://twitter.com/akshatbajetha",
      logo: TwitterLight,
    },
    {
      link: "https://github.com/akshatbajetha",
      logo: GithubLight,
    },
  ];
  const darkLinks = [
    {
      link: "https://www.linkedin.com/in/akshat-bajetha",
      logo: LinkedInDark,
    },
    {
      link: "https://twitter.com/akshatbajetha",
      logo: TwitterDark,
    },
    {
      link: "https://github.com/akshatbajetha",
      logo: GithubDark,
    },
  ];
  return (
    <>
      <Separator />
      <div className="flex flex-row justify-between overflow-hidden mx-4 px-4">
        <div className="flex items-center justify-center pt-2 mt-2">
          <p>
            Developed by&nbsp;
            <span className="text-primary underline">Akshat Bajetha</span>
          </p>
        </div>
        <div className="flex justify-center items-center p-2 dark:hidden">
          {lightLinks.map((link) => (
            <a
              key={link.link}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition-transform duration-200"
            >
              <img
                className="h-7 w-7 m-2"
                src={link.logo.src}
                alt={link.link}
              />
            </a>
          ))}
        </div>
        <div className="dark:flex justify-center items-center p-2 hidden">
          {darkLinks.map((link) => (
            <a
              key={link.link}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition-transform duration-200"
            >
              <img
                className="h-7 w-7 m-2"
                src={link.logo.src}
                alt={link.link}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
export default Footer;
