import { SignInAgreement, SigninFirstForm, SigninSecondForm, TagInput } from 'components/index';
import { useEffect } from 'react';
import { useSigninFormData, useSigninFormDataActions } from 'store/signInData';

interface SinginTabProps {
  activeIndex: number;
}

const SinginTab = ({ activeIndex }: SinginTabProps) => {
  const signinFormData = useSigninFormData();
  const { changeStyleTags, setIsDisabled } = useSigninFormDataActions();

  useEffect(() => {
    if (signinFormData.styleTags.length !== 0) setIsDisabled(false);
    else setIsDisabled(true);
  }, [signinFormData.styleTags]);

  if (activeIndex === 0) return <SigninFirstForm />;

  if (activeIndex === 1) return <SigninSecondForm />;

  if (activeIndex === 2) {
    return <TagInput currentStyle={signinFormData.styleTags} handleChange={changeStyleTags} />;
  }

  if (activeIndex === 3) return <SignInAgreement />;

  return null;
};

export default SinginTab;
