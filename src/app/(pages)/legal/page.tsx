// LegalInformation.tsx

// Imports
import SectionHeader from "@/components/base/SectionHeader";
import { supportmail } from "@/index";

export default function LegalInformation() {
  return (
    <main>
      <section id="legal" className="container contx conty mx-auto">
        <SectionHeader
          title="Terms and Conditions"
          subtitle="Legal Information"
          description="Understand the rules for using MaiaLabs' services and website."
        />

        {/* Content Section */}
        <div className="container space-y-8">
          {/* Terms of Service */}
          <div className="space-y-4">
            <h2 className="subtitle">Terms of Service</h2>
            <p className="simple-text">
              By using this website and services, you agree to abide by the
              following terms. These terms govern your access to and use of the
              website, services, and products. Please read them carefully.
            </p>
            <p className="low-text">
              1. **Acceptance of Terms**: By accessing or using our services,
              you agree to comply with and be bound by these Terms.
            </p>
            <p className="low-text">
              2. **Service Use**: You agree not to misuse the services provided
              and to comply with all applicable laws and regulations.
            </p>
            <p className="low-text">
              3. **Account Responsibility**: If you create an account, you are
              responsible for keeping your login information secure.
            </p>
          </div>

          {/* Privacy Policy */}
          <div className="space-y-4">
            <h2 className="subtitle">Privacy Policy</h2>
            <p className="simple-text">
              We value your privacy and are committed to protecting the personal
              data you share with us. This policy outlines how we collect, use,
              and safeguard your information.
            </p>
            <p className="low-text">
              1. **Information Collection**: We collect personal information
              when you use our website, register for an account, or interact
              with our services.
            </p>
            <p className="low-text">
              2. **Data Usage**: Your data will be used only to enhance your
              experience and provide relevant services. We will never sell your
              information to third parties.
            </p>
            <p className="low-text">
              3. **Data Security**: We implement reasonable security measures to
              protect your personal data from unauthorized access.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="space-y-4">
            <h2 className="subtitle">Disclaimer</h2>
            <p className="simple-text">
              All content on this website is provided for informational purposes
              only. While we strive for accuracy, we make no representations or
              warranties regarding the completeness or correctness of the
              information provided.
            </p>
            <p className="low-text">
              1. **Accuracy of Information**: The information provided on this
              site is believed to be accurate, but we do not guarantee its
              correctness.
            </p>
            <p className="low-text">
              2. **Limitation of Liability**: We are not responsible for any
              damages arising from the use or inability to use our services or
              information on this site.
            </p>
            <p className="low-text">
              3. **External Links**: We are not responsible for the content of
              any third-party websites linked to or from this site.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-8 pt-8 text-center">
            <p className="subinfo">
              GameChisel, Kölner Str. 354b, 51515 Kürten
            </p>
            <p className="subinfo">
              If you have any questions about these Terms, Privacy Policy, or
              Disclaimer, feel free to contact us at {supportmail}.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
