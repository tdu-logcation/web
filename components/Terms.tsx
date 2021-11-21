import {OtherPage} from './common/OtherPage';
import {
  Box,
  Center,
  Text,
  Heading,
  ListItem,
  OrderedList,
} from '@chakra-ui/react';
import Link from 'next/link';

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

const TermsBody = () => {
  return (
    <OtherPage title="利用規約">
      <Center>
        <Box width={['99%', '90%', '50%']}>
          <Header>はじめに</Header>
          <Body>
            この利用規約（以下、「本規約）は、tdu-logcationプロジェクト（以下、「当プロジェクト」）が運営するLogcation（以下、「本サービス」）のクラウド同期を利用するうえでの利用条件を定めるものです。
            登録ユーザーの皆さま（以下、「ユーザー」）には、本規約に従って本サービスをご利用いただきます。
          </Body>
          <Header>第1条（適用）</Header>
          <OrderedList>
            <ListItem>
              本規約は、ユーザーと当プロジェクトとの間の本サービスの利用に関わる一切の関係に適用されるものとします。
            </ListItem>
            <ListItem>
              当プロジェクトは本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
            </ListItem>
            <ListItem>
              本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。
            </ListItem>
          </OrderedList>
          <Header>第2条（利用登録）</Header>
          <OrderedList>
            <ListItem>
              本サービスにおいては、登録希望者が本規約に同意の上、当プロジェクトの定める方法によって利用登録を申請し、当プロジェクトがこれを承認することによって、利用登録が完了するものとします。
            </ListItem>
            <ListItem>
              当プロジェクトは、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
              <OrderedList marginY=".5rem">
                <ListItem>
                  利用登録の申請に際して虚偽の事項を届け出た場合
                </ListItem>
                <ListItem>
                  本規約に違反したことがある者からの申請である場合
                </ListItem>
                <ListItem>
                  その他、当プロジェクトが利用登録を相当でないと判断した場合
                </ListItem>
              </OrderedList>
            </ListItem>
          </OrderedList>
          <Header>第3条（ユーザーIDの管理）</Header>
          <OrderedList marginY=".5rem">
            <ListItem>
              ユーザは、自己の責任において、本サービスのユーザーIDを適切に管理するものとします。
            </ListItem>
            <ListItem>
              ユーザーIDが第三者によって使用されたことによって生じた損害は、当プロジェクトは一切の責任を負わないものとします。
            </ListItem>
          </OrderedList>
          <Header>第4条（利用料金および支払方法）</Header>
          <Body>本サービスは無料です。</Body>
          <Header>第5条（禁止事項）</Header>
          <Body>
            ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
          </Body>
          <OrderedList marginTop="1rem">
            <ListItem>法令または公序良俗に違反する行為</ListItem>
            <ListItem>犯罪行為に関連する行為</ListItem>
            <ListItem>
              本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為
            </ListItem>
            <ListItem>
              当サービス、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
            </ListItem>
            <ListItem>
              本サービスによって得られた情報を商業的に利用する行為
            </ListItem>
            <ListItem>
              当プロジェクトのサービスの運営を妨害するおそれのある行為
            </ListItem>
            <ListItem>不正アクセスをし、またはこれを試みる行為</ListItem>
            <ListItem>
              他のユーザーに関する個人情報等を収集または蓄積する行為
            </ListItem>
            <ListItem>不正な目的を持って本サービスを利用する行為</ListItem>
            <ListItem>
              本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為
            </ListItem>
            <ListItem>他のユーザーに成りすます行為</ListItem>
            <ListItem>
              当プロジェクトが許諾しない本サービス上での宣伝、広告、勧誘、または営業行為
            </ListItem>
            <ListItem>面識のない異性との出会いを目的とした行為</ListItem>
            <ListItem>
              当プロジェクトのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
            </ListItem>
            <ListItem>その他、当プロジェクトが不適切と判断する行為</ListItem>
          </OrderedList>
          <Header>第6条（本サービスの提供の停止等）</Header>
          <OrderedList>
            <ListItem>
              当プロジェクトは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              <OrderedList>
                <ListItem>
                  本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
                </ListItem>
                <ListItem>
                  地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
                </ListItem>
                <ListItem>
                  コンピュータまたは通信回線等が事故により停止した場合
                </ListItem>
                <ListItem>
                  その他、当プロジェクトが本サービスの提供が困難と判断した場合
                </ListItem>
              </OrderedList>
            </ListItem>
            <ListItem>
              当プロジェクトは、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
            </ListItem>
          </OrderedList>
          <Header>第7条（利用制限および登録抹消）</Header>
          <OrderedList>
            <ListItem>
              当プロジェクトは、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
              <OrderedList>
                <ListItem>本規約のいずれかの条項に違反した場合</ListItem>
                <ListItem>
                  登録事項に虚偽の事実があることが判明した場合
                </ListItem>
                <ListItem>料金等の支払債務の不履行があった場合</ListItem>
                <ListItem>
                  当プロジェクトからの連絡に対し、一定期間返答がない場合
                </ListItem>
                <ListItem>
                  本サービスについて、最終の利用から一定期間利用がない場合
                </ListItem>
                <ListItem>
                  その他、当プロジェクトが本サービスの利用を適当でないと判断した場合
                </ListItem>
              </OrderedList>
            </ListItem>
            <ListItem>
              当プロジェクトは、本条に基づき当プロジェクトが行った行為によりユーザーに生じた損害について、一切の責任を負いません。
            </ListItem>
          </OrderedList>
          <Header>第8条（退会）</Header>
          <Body>
            ユーザは、当プロジェクトの定める退会手続により、本サービスから退会できるものとします。
          </Body>
          <Header>第9条（保証の否認および免責事項）</Header>
          <OrderedList>
            <ListItem>
              当プロジェクトは、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
            </ListItem>
            <ListItem>
              当プロジェクトは、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当プロジェクトとユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
            </ListItem>
            <ListItem>
              前項ただし書に定める場合であっても、当プロジェクトは、当プロジェクトの過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当プロジェクトまたはユーザーが損害発生につき予見し、または予見し得た場合を含みます。）について一切の責任を負いません。また、当プロジェクトの過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は、ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
            </ListItem>
            <ListItem>
              当プロジェクトは、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
            </ListItem>
          </OrderedList>
          <Header>第10条（サービス内容の変更等）</Header>
          <Body>
            当プロジェクトは、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
          </Body>
          <Header>第11条（利用規約の変更）</Header>
          <Body>
            当プロジェクトは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
          </Body>
          <Header>第12条（個人情報の取扱い）</Header>
          <Body>
            当プロジェクトは、本サービスの利用によって取得する個人情報については、当プロジェクト「
            <Text as="span" textDecoration="underline">
              <Link href="/privacy">プライバシーポリシー</Link>
            </Text>
            」に従い適切に取り扱うものとします。
          </Body>
          <Header>第13条（権利義務の譲渡の禁止）</Header>
          <Body>
            ユーザーは、当プロジェクトの書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
          </Body>
          <Header>第14条（準拠法・裁判管轄）</Header>
          <OrderedList>
            <ListItem>
              本規約の解釈にあたっては、日本法を準拠法とします。
            </ListItem>
            <ListItem>
              本サービスに関して紛争が生じた場合には、当プロジェクトの本店所在地を管轄する裁判所を専属的合意管轄とします。
            </ListItem>
          </OrderedList>
          <Text marginTop="2rem">2021年 11月 17日 制定</Text>
        </Box>
      </Center>
    </OtherPage>
  );
};

export default TermsBody;
