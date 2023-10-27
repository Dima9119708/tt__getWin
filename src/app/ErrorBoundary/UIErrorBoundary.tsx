const UIErrorBoundary = () => {

  return (
    <div className="tw-h-[100%] tw-flex-center">
      <div className="tw-flex-center tw-flex-col shadow p-4 rounded-3">
        {/*<h2 className="fs-4 mb-3">{t('please_update_the_page')}</h2>*/}
        {/*<Button className="fs-6" onClick={() => window.location.reload()}>*/}
        {/*  {t('reload_page')}*/}
        {/*</Button>*/}
      </div>
    </div>
  );
};

export default UIErrorBoundary;
