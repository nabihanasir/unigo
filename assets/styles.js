import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  //  Reusable Components
  LargeButton: {
    backgroundColor: '#F2B749',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: 'center',
    marginTop:20,
  },
  PrimaryButton: {
    backgroundColor: '#f7a900',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  PrimaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  InputContainer: {
    marginVertical: 10,
  },
  Input: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },

  //  Onboarding Screen
  onboardingContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  onboardingImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  onboardingImage: {
    resizeMode: 'cover',
    height: 340,
    width: 290,
  },
  onboardingTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  onboardingDescription: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333333',
    marginTop: 5,
  },
  onboardingText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  //  Profile Screen
  profilecontainer: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  profileheading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 16,
    marginBottom: 8,
  },

  //  Notification Screen
  NotificationContainer: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  NotificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  NotificationHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  NotificationSectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
  },

  //  Help Screen
  HelpScreenContainer: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  HelpScreenBackButton: {
    marginBottom: 10,
  },
  HelpScreenHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  HelpScreenSubHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  HelpScreenInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
  },
  HelpScreenFaqLink: {
    color: '#00BCD4',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  HelpScreenSubmitButton: {
    backgroundColor: '#F9B233',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  HelpScreenSubmitText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // Route Screen
  RouteCntainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  RouteTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  RouteLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 5,
  },

  //  Login Component
  loginComponentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  loginComponentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  loginComponentInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  loginComponentButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  loginComponentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GlobalStyles;
