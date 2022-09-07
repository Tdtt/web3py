import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Tdtt</GradientText> 👋
        </>
      }
      description={
        <>
          我是加密世界的新人,2021年牛市开始投资多个项目真正接触加密货币.{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Crypto
          </a>{' '}
          下半年学习K线和各种技术指标开始在币安玩合约,{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Futures
          </a>{' '}
          最近在学习Python和web3相关的课程投资自己.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
