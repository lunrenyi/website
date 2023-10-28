'use client';
import PageHeader from 'components/layout/PageHeader';
import ScrollBlock from 'components/layout/ScrollBlock';
import { Blocks } from 'lib/content';
import LinkButton from 'components/common/LinkButton';
import { Flexbox, Icon, Icons, Text } from 'react-basics';

const items = [
  Blocks.simpleAnalytics,
  Blocks.visitorInsights,
  Blocks.customEvents,
  Blocks.filters,
  Blocks.realtimeData,
  Blocks.mobileFriendly,
  Blocks.unlimitedWebsites,
  Blocks.lightWeight,
  Blocks.shareData,
];

export default function Features() {
  return (
    <section>
      <PageHeader>
        <h1>All the features you need</h1>
        <p>
          Umami is packed with amazing features that enable you to better
          <br /> understand your website traffic.
        </p>
      </PageHeader>
      <ScrollBlock items={items} />
      <Flexbox justifyContent="center" alignItems="center">
        <LinkButton href="/features" variant="secondary">
          <Text>Explore more features </Text>
          <Icon>
            <Icons.ArrowRight />
          </Icon>
        </LinkButton>
      </Flexbox>
    </section>
  );
}