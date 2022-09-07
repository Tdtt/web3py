import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="学习方向"
        description="最近市场萧条, 空余的时间拿来投资自己是最好的选择."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Web3</Tags>
            <Tags color={ColorTags.LIME}>Python</Tags>
            <Tags color={ColorTags.SKY}>Node.js</Tags>
            <Tags color={ColorTags.ROSE}>Solidity</Tags>
          </>
        }
      />
      <Project
        name="合约交易"
        description="华尔街没有新鲜事,投机如山岳般古老. 用自己真金白银总结出来的经验加上自己的交易习惯才是适合自己的最好交易策略"
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>TradingView</Tags>
            <Tags color={ColorTags.EMERALD}>Fibonacci</Tags>
            <Tags color={ColorTags.YELLOW}>支撑阻力</Tags>
             <Tags color={ColorTags.SKY}>成交量分布</Tags>
          </>
        }
      />
      <Project
        name="VC"
        description="去年投资了很多项目,经历了牛市的疯狂和熊市的残酷.从牛市的哪怕项目方是头猪都能跟着风口起飞,
                     到熊市的优质项目开盘破发.果然要经历牛熊才能认清自己.理智投资"
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>项目背景</Tags>
            <Tags color={ColorTags.INDIGO}>合作伙伴</Tags>
            <Tags color={ColorTags.ROSE}>IDO平台</Tags>
            <Tags color={ColorTags.FUCHSIA}>市场趋势</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
