"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LoanApplicationForm from '../../components/LoanApplicationForm';

const PersonalLoanPage = () => {
  return (
    <div>

        <div className="flex flex-col lg:flex-row ">
          <div className="w-full lg:w-5/12 lg:sticky lg:top-0 self-start h-fit">
            <Image
              alt="image"
              width="100"
              height="400"
              decoding="async"
              data-nimg="1"
              style={{ color: 'transparent', width: '100%', height: 'auto' }}
              sizes="100vw"
              src="/personal_loan_banner.webp"
            />
          </div>
          <div className="w-full lg:w-7/12  rounded-lg">
            <div className="pt-2 px-4 pb-0 sm:pt-[3%] sm:px-[112px]">
              <h2 className="text-lg sm:text-2xl text-center text-blue-550 font-bold mb-6">
                Get Personal Loan up to ₹50 lakhs
              </h2>
              <LoanApplicationForm />
            </div>
            <div className="m-[10%]">
              <p className="text-xl text-blue-250 font-bold">Product Detail</p>
              <div
                className="mt-2  prose"
                dangerouslySetInnerHTML={{
                  __html: `
                  <ul style="list-style-type:disc;margin-top:0in" type="disc">
                    <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:14px"><span style="color:black;mso-color-alt:windowtext">Are you planning a wedding this year?</span><o:p></o:p></span></li>
                    <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:14px"><span style="color:black;mso-color-alt:windowtext">Do you want to renovate your home before Diwali or New Year’s Eve?</span><o:p></o:p></span></li>
                    <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:14px"><span style="color:black;mso-color-alt:windowtext">Do you urgently need some funds to cover the medical bills?</span><o:p></o:p></span></li>
                    <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:14px"><span style="color:black;mso-color-alt:windowtext">Or are you planning to study abroad?</span><o:p></o:p></span></li>
                  </ul>
                  <p style="text-align:justify">&nbsp;</p>
                  <p class="MsoNormal" style="background-color:#FAFAFA;text-align:justify"><span style="font-size:14px"><span style="color:black;mso-color-alt:windowtext">Or do you just need money to resolve some personal expenses?</span><o:p></o:p></span></p>
                  <p style="text-align:justify">&nbsp;</p>
                  <p class="MsoNormal" style="background-color:#FAFAFA;text-align:justify"><span style="font-size:14px"><span style="color:black;mso-color-alt:windowtext">If you are juggling in any of the situations mentioned above, then ‘Personal Loan’ can help you solve your situations in a better way with easy monthly repayments over a period of time.</span><o:p></o:p></span></p>
                  <p>&nbsp;</p>
                  <p class="MsoNormal" style="background-color:#FAFAFA;text-align:justify"><span style="font-size:14px"><span style="color:black;mso-color-alt:windowtext">A personal loan is a sum of money that you require for various purposes. For example, you can pay off home renovation bills, wedding expenses, medical bills, or any other bill through this loan amount. Banks, credit unions, and online lenders offer you a certain period to pay off the loan.</span></span><o:p></o:p></p>
                  <p style="text-align:justify">&nbsp;</p>
                  <h3><span style="color:#0066FF"><strong>Fresh Personal Loan Features</strong></span><span style="font-family:Georgia, serif"><span style="color:#0066FF"><o:p></o:p></span></span></h3>
                  <p style="text-align:justify">&nbsp;</p>
                  <p class="MsoNormal" style="background-color:#FAFAFA;text-align:justify"><span style="font-size:14px"><span style="color:black;mso-color-alt:windowtext">Apply for a loan with LoansJagat and get up to ₹50 lakhs in your bank account. Complete digital process with minimal documentations. Few other features of Personal Loan are defined below.</span><o:p></o:p></span></p>
                  <p style="text-align:justify">&nbsp;</p>
                  <ul style="list-style-type:disc;margin-top:0in" type="disc">
                    <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:14px"><span style="color:black;mso-color-alt:windowtext">Compare &amp; Apply from 20+ banks and NBFCs</span><o:p></o:p></span></li>
                    <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:14px"><span style="color:black;mso-color-alt:windowtext">Lowest interest rates</span><o:p></o:p></span></li>
                    <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:14px"><span style="color:black;mso-color-alt:windowtext">Up to 72 months to pay back the loan</span><o:p></o:p></span></li>
                    <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:14px"><span style="color:black;mso-color-alt:windowtext">Get money in your account within 24 hours</span><o:p></o:p></span></li>
                    <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:14px"><span style="color:black;mso-color-alt:windowtext">Get loans without collateral and physical security</span></span><o:p></o:p><span style="font-family:Georgia, serif"><o:p></o:p></span></li>
                  </ul>
                  `,
                }}
              />
              <p className=" mt-10 mb-8 text-xl font-bold text-blue-250">
                Eligibility
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      alt="image"
                      loading="lazy"
                      width="35"
                      height="35"
                      decoding="async"
                      data-nimg="1"
                      className="mb-2"
                      style={{ color: 'transparent' }}
                      src="/WhoCanApply.png"
                    />
                    <p className="font-semibold text-center mb-4">
                      Who can apply:
                    </p>
                  </div>
                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{
                      __html: `
                      <ul style="list-style-type:disc;margin-top:0in" type="disc">
                        <li class="MsoNormal" style="background-color:#F0F7FF;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif;font-size:12px"><span style="color:black;mso-bidi-font-family:&quot;Segoe UI Emoji&quot;;mso-color-alt:windowtext">👨‍💼</span></span><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext"> Salaried Individual</span><o:p></o:p></span></li>
                        <li class="MsoNormal" style="background-color:#F0F7FF;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif;font-size:12px"><span style="line-height:115%;mso-ansi-language:EN-US;mso-bidi-font-family:&quot;Segoe UI Emoji&quot;;mso-bidi-font-size:10.5pt;mso-bidi-language:HI;mso-fareast-font-family:Calibri;mso-fareast-language:EN-US;mso-fareast-theme-font:minor-latin">📈</span></span><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext"> A credit score above 700</span><o:p></o:p></span></li>
                        <li class="MsoNormal" style="background-color:#F0F7FF;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif;font-size:12px"><span style="line-height:115%;mso-ansi-language:EN-US;mso-bidi-font-family:&quot;Segoe UI Emoji&quot;;mso-bidi-font-size:10.5pt;mso-bidi-language:HI;mso-fareast-font-family:Calibri;mso-fareast-language:EN-US;mso-fareast-theme-font:minor-latin">💳</span></span><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext"> ₹40K/month income in metro cities and ₹30K in other cities</span><o:p></o:p></span></li>
                        <li class="MsoNormal" style="background-color:#F0F7FF;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif;font-size:12px"><span style="color:black;mso-bidi-font-family:&quot;Segoe UI Emoji&quot;;mso-color-alt:windowtext">🧑‍💻</span></span><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext"> Total work experience of at least 1 year</span><o:p></o:p></span></li>
                      </ul>
                      `,
                    }}
                  />
                </div>
                <div>
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      alt="image"
                      loading="lazy"
                      width="35"
                      height="35"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: 'transparent' }}
                      src="/Age.png"
                    />
                    <p className="font-semibold mt-2 ml-2 text-center mb-4">
                      Age:
                    </p>
                  </div>
                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{
                      __html: `
                      <ul><li><p class="MsoNormal" style="background-color:#F0F7FF"><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext">Above 23 years and below 58 years</span><o:p></o:p><o:p></o:p><o:p></o:p></span></p></li></ul>
                      `,
                    }}
                  />
                </div>
              </div>
              <div className="mt-10">
                <p className="text-xl font-bold text-blue-250 ">
                  Required Documents
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="">
                    <div className="">
                      <div className=" flex items-center mb-2 bg-blue-60 rounded-xl p-2">
                        <Image
                          alt="id"
                          loading="lazy"
                          width="30"
                          height="30"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: 'transparent' }}
                          src="/Identify_Proof.svg"
                        />
                        <p className="ml-3 font-semibold">Identity Proof</p>
                      </div>
                      <div
                        className=" prose text-sm   text-gray-700"
                        dangerouslySetInnerHTML={{
                          __html: `
                          <p class="MsoNormal" style="background-color:#FAFAFA"><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext"><strong>Any of the following</strong></span><o:p></o:p></span></p>
                          <ul style="list-style-type:disc;margin-top:0in" type="disc">
                            <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext">Passport</span><o:p></o:p></span></li>
                            <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext">Voter ID</span><o:p></o:p></span></li>
                            <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext">Driving License</span><o:p></o:p></span></li>
                            <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext">PAN Card (Mandatory)</span><o:p></o:p></span></li>
                            <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext">Aadhaar Card (Mandatory)</span><o:p></o:p></span></li>
                          </ul>
                          `,
                        }}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <div className=" flex items-center mb-2 bg-blue-60 rounded-xl p-2">
                        <Image
                          alt="address"
                          loading="lazy"
                          width="30"
                          height="30"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: 'transparent' }}
                          src="/Address_Proof.svg"
                        />
                        <p className="ml-3 font-semibold ">Address Proof</p>
                      </div>
                      <div
                        className="prose text-sm  text-gray-700"
                        dangerouslySetInnerHTML={{
                          __html: `
                          <p class="MsoNormal" style="background-color:#FAFAFA"><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext"><strong>Any of the following</strong></span><o:p></o:p></span></p>
                          <ul style="list-style-type:disc;margin-top:0in" type="disc">
                            <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext">Aadhaar Card&nbsp;</span><o:p></o:p></span></li>
                            <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext">Piped Gas Bill</span><o:p></o:p></span></li>
                            <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext">Electricity Bill</span></span><o:p></o:p></li>
                          </ul>
                          `,
                        }}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <div className=" flex items-center mb-2 bg-blue-60 rounded-xl p-2">
                        <Image
                          alt="docs"
                          loading="lazy"
                          width="30"
                          height="30"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: 'transparent' }}
                          src="/Other_Documents.svg"
                        />
                        <p className="ml-3 font-semibold ">Other Docs</p>
                      </div>
                      <div
                        className="prose text-sm  text-gray-700"
                        dangerouslySetInnerHTML={{
                          __html: `
                          <p class="MsoNormal" style="background-color:#FAFAFA"><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext"><strong>Mandatory</strong></span><o:p></o:p></span></p>
                          <ul style="list-style-type:disc;margin-top:0in" type="disc">
                            <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext">Salary Slips (Last 3 months)</span><o:p></o:p></span></li>
                            <li class="MsoNormal" style="background-color:#FAFAFA;mso-list:l0 level1 lfo1;tab-stops:list .5in"><span style="font-size:12px"><span style="color:black;mso-color-alt:windowtext">Salary A/c Bank statement (Last 3 months)</span></span><o:p></o:p><o:p></o:p></li>
                          </ul>
                          `,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl font-bold mt-6 text-blue-250">Example</p>
              <div
                className="mt-2 prose"
                dangerouslySetInnerHTML={{
                  __html: `
                  <p><span style="font-family:Georgia, serif;font-size:14px"><meta charset="utf-8"></span></p>
                  <p class="MsoNormal" style="background-color:#FAFAFA;text-align:justify"><span style="font-size:14px"><span style="color:black;mso-color-alt:windowtext">For example, if Megha applies for a personal loan of INR 3 Lacs and gets the loan sanctioned at the rate of 11.99% with a tenure range of 5 years, in such a case her total EMI would be INR 6,672. The repayment amount till the end of the 5-year tenure would be INR 4,00,309 (i.e., 6,672 EMI/month for 60 months).</span></span><o:p></o:p></p>
                  <figure class="table" style="width:100%"><table class="MsoTableGrid ck-table-resized" style="border-collapse:collapse;mso-border-alt:solid windowtext .5pt;mso-padding-alt:0in 5.4pt 0in 5.4pt;mso-yfti-tbllook:1184" border="1" cellspacing="0" cellpadding="0">
                  <colgroup><col style="width:47.65%"><col style="width:52.35%"></colgroup>
                  <tbody>
                  <tr style="mso-yfti-firstrow:yes;mso-yfti-irow:0">
                  <td style="border:1.0pt solid windowtext;mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt;vertical-align:top;width:233.75pt" width="312">
                  <p class="MsoNormal" style="line-height:normal;margin-bottom:0in"><span style="font-size:10px">Repayment Period<o:p></o:p></span></p>
                  </td>
                  <td style="border-bottom-style:solid;border-color:windowtext;border-left-style:none;border-right-style:solid;border-top-style:solid;border-width:1.0pt;mso-border-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;padding:0in 5.4pt;vertical-align:top;width:233.75pt" width="312">
                  <p class="MsoNormal" style="line-height:normal;margin-bottom:0in"><span style="font-size:10px">Minimum&nbsp;1 year to Maximum&nbsp;7 years<o:p></o:p></span></p>
                  </td>
                  </tr>
                  <tr style="mso-yfti-irow:1">
                  <td style="background-color:#F2F2F2;border-bottom-style:solid;border-color:windowtext;border-left-style:solid;border-right-style:solid;border-top-style:none;border-width:1.0pt;mso-background-themecolor:background1;mso-background-themeshade:242;mso-border-alt:solid windowtext .5pt;mso-border-top-alt:solid windowtext .5pt;padding:0in 5.4pt;vertical-align:top;width:233.75pt" width="312">
                  <p class="MsoNormal" style="line-height:normal;margin-bottom:0in"><span style="font-size:10px"><span style="color:black;mso-color-alt:windowtext">Annual Percentage Rate (APR)</span><o:p></o:p></span></p>
                  </td>
                  <td style="background-color:#F2F2F2;border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;mso-background-themecolor:background1;mso-background-themeshade:242;mso-border-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;mso-border-top-alt:solid windowtext .5pt;padding:0in 5.4pt;vertical-align:top;width:233.75pt" width="312">
                  <p class="MsoNormal" style="line-height:normal;margin-bottom:0in"><span style="font-size:10px"><span style="color:black;mso-color-alt:windowtext">Minimum 9.99% to Maximum 17%</span><o:p></o:p></span></p>
                  </td>
                  </tr>
                  <tr style="mso-yfti-irow:2">
                  <td style="border-bottom-style:solid;border-color:windowtext;border-left-style:solid;border-right-style:solid;border-top-style:none;border-width:1.0pt;mso-border-alt:solid windowtext .5pt;mso-border-top-alt:solid windowtext .5pt;padding:0in 5.4pt;vertical-align:top;width:233.75pt" width="312">
                  <p class="MsoNormal" style="line-height:normal;margin-bottom:0in"><span style="font-size:10px">Processing Fees<o:p></o:p></span></p>
                  </td>
                  <td style="border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;mso-border-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;mso-border-top-alt:solid windowtext .5pt;padding:0in 5.4pt;vertical-align:top;width:233.75pt" width="312">
                  <p class="MsoNormal" style="line-height:normal;margin-bottom:0in"><span style="font-size:10px">1% to 2%<o:p></o:p></span></p>
                  </td>
                  </tr>
                  <tr style="mso-yfti-irow:3;mso-yfti-lastrow:yes">
                  <td style="background-color:#F2F2F2;border-bottom-style:solid;border-color:windowtext;border-left-style:solid;border-right-style:solid;border-top-style:none;border-width:1.0pt;mso-background-themecolor:background1;mso-background-themeshade:242;mso-border-alt:solid windowtext .5pt;mso-border-top-alt:solid windowtext .5pt;padding:0in 5.4pt;vertical-align:top;width:233.75pt" width="312">
                  <p class="MsoNormal" style="line-height:normal;margin-bottom:0in"><span style="font-size:10px"><span style="color:black;mso-color-alt:windowtext">Stamp Duty Charges</span><o:p></o:p></span></p>
                  </td>
                  <td style="background-color:#F2F2F2;border-bottom:1.0pt solid windowtext;border-left-style:none;border-right:1.0pt solid windowtext;border-top-style:none;mso-background-themecolor:background1;mso-background-themeshade:242;mso-border-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;mso-border-top-alt:solid windowtext .5pt;padding:0in 5.4pt;vertical-align:top;width:233.75pt" width="312">
                  <p class="MsoNormal" style="line-height:normal;margin-bottom:0in"><span style="font-size:10px"><span style="color:black;mso-color-alt:windowtext">Rs. 500</span><o:p></o:p></span></p>
                  </td>
                  </tr>
                  </tbody>
                  </table></figure>
                  `,
                }}
              />
              <div className="flex justify-center mt-8">
                <p className="text-center text-gray-700">Address: No 326/3 3rd Floor, Vandana Complex, New Bazar Street, Krishnarajapuram-560036</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PersonalLoanPage;