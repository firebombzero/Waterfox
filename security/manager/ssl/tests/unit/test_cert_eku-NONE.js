//// AUTOGENERATED FILE, DO NOT EDIT
// -*- Mode: javascript; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*-
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

"use strict";

do_get_profile(); // must be called before getting nsIX509CertDB
const certdb = Cc["@mozilla.org/security/x509certdb;1"]
                 .getService(Ci.nsIX509CertDB);

function cert_from_file(filename) {
  let der = readFile(do_get_file("test_cert_eku/" + filename, false));
  return certdb.constructX509(der, der.length);
}

function load_cert(cert_name, trust_string) {
  let cert_filename = cert_name + ".der";
  addCertFromFile(certdb, "test_cert_eku/" + cert_filename, trust_string);
  return cert_from_file(cert_filename);
}

function run_test() {
  load_cert("ca", "CT,CT,CT");

  checkCertErrorGeneric(certdb, load_cert('int-EKU-NONE', ',,'), PRErrorCodeSuccess, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_EP-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_EP-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_EP-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_EP-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_EP-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_EP-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_EP_NS_OS_SA_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_EP_NS_OS_SA_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_EP_NS_OS_SA_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_EP_NS_OS_SA_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_EP_NS_OS_SA_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_EP_NS_OS_SA_TS-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_NS-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_NS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_NS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_NS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_NS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_NS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_OS-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_SA-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_SA-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_TS-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-CA_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_NS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_NS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_NS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_NS-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_NS-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_NS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_OS-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_SA-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_SA-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_SA-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_TS-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_TS-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-EP_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NONE-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NONE-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NONE-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NONE-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NONE-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NONE-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_OS-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_SA-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-NS_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS_SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS_SA-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-OS_TS-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-SA-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-SA-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-SA_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-SA_TS-int-EKU-NONE.der'), PRErrorCodeSuccess, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-SA_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-SA_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-SA_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-SA_TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageStatusResponder);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLClient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageSSLServer);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_KEY_USAGE, certificateUsageSSLCA);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailSigner);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageEmailRecipient);
  checkCertErrorGeneric(certdb, cert_from_file('ee-EKU-TS-int-EKU-NONE.der'), SEC_ERROR_INADEQUATE_CERT_TYPE, certificateUsageStatusResponder);
}