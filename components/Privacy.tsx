import {
  Heading,
  Box,
  Text,
  Center,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import {OtherPage} from './common/OtherPage';

const Header: React.FC = ({children}) => {
  return (
    <Box marginTop="1rem" marginBottom=".5rem">
      <Heading fontSize="1.5rem">{children}</Heading>
    </Box>
  );
};

const Body: React.FC = ({children}) => {
  return <Text>{children}</Text>;
};

const PrivacyBody = () => {
  return (
    <OtherPage title="プライバシーポリシー" size="1rem" marginLeft="0rem">
      <Center>
        <Box width={['99%', '90%', '50%']}>
          <Header>はじめに</Header>
          <Body>
            tdu-logcationプロジェクト（以下、「当プロジェクト」）が運営するLogcation（以下、「本サービス」）のクラウド同期における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
          </Body>
          <Header>第1条（個人情報）</Header>
          <Body>
            「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
          </Body>
          <Header>第2条（個人情報の収集方法）</Header>
          <Body>
            当プロジェクトは、ユーザーが本サービスを利用すると行動履歴データをクラウド上と同期します。
          </Body>
          <Header>第3条（個人情報を収集・利用する目的）</Header>
          <Body>
            当サービスが個人情報を収集・利用する目的は、以下のとおりです。
          </Body>
          <OrderedList marginTop="1rem">
            <ListItem>複数端末で行動履歴データの同期を実現するため</ListItem>
            <ListItem>バックアップのため</ListItem>
          </OrderedList>
          <Header>第4条（利用目的の変更）</Header>
          <OrderedList>
            <ListItem>
              当サービスは、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
            </ListItem>
            <ListItem>
              利用目的の変更を行った場合には、変更後の目的について、当サービス所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
            </ListItem>
          </OrderedList>
          <Header>第5条（個人情報の第三者提供）</Header>
          <Body>
            当サービスは、個人情報を第三者に一切提供しません。ただし、個人情報保護法その他法令で認められる場合を除きます。
          </Body>
          <Header>第6条（個人情報の開示）</Header>
          <Body>一切開示しません。</Body>
          <Header>第7条（個人情報の利用停止等）</Header>
          <OrderedList>
            <ListItem>
              当サービスは、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下、「利用停止等」といいます。）を求められた場合には、遅滞なく必要な調査を行います。
            </ListItem>
            <ListItem>
              前項の調査結果に基づき、その請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の利用停止等を行います。
            </ListItem>
            <ListItem>
              当サービスは、前項の規定に基づき利用停止等を行った場合、または利用停止等を行わない旨の決定をしたときは、遅滞なく、これをユーザーに通知します。
            </ListItem>
          </OrderedList>
          <Header>第8条（プライバシーポリシーの変更）</Header>
          <OrderedList>
            <ListItem>
              本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。
            </ListItem>
            <ListItem>
              当サービスが別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
            </ListItem>
          </OrderedList>
          <Header>第9条（お問い合わせ窓口）</Header>
          <Body>
            本ポリシーに関するお問い合わせは、下記までお願いいたします。
            <br />
            <br />
            Twitter(@cateiru): https://twitter.com/cateiru
          </Body>
        </Box>
      </Center>
    </OtherPage>
  );
};

export default PrivacyBody;
