useEffect(() => {
    if (!userInfo) {
      // Navigate to '/createprofile' if userInfo.category is falsy and userInfo.gender is 'male'
      navigate('/selectgender');
    }
  }, [navigate, userInfo]);

  useEffect(() => {
    if (userInfo && !userInfo.category && userInfo.gender === 'male') {
      // Navigate to '/createprofile' if userInfo.category is falsy and userInfo.gender is 'male'
      navigate('/createprofile');
    }
  }, [navigate, userInfo]);

  useEffect(() => {
    if (userInfo && !userInfo.category && userInfo.gender === 'female') {
      // Navigate to '/createprofile' if userInfo.category is falsy and userInfo.gender is 'male'
      navigate('/createprofile');
    }
  }, [navigate, userInfo]); 
  


  const config = {
    reference: (new Date()).getTime().toString(),
    email:email,
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: '',
    currency: "ZAR",
};
