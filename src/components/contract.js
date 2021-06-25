import React from 'react'

import { LogoFL } from '../assets/LogoFL'
import { LogoSmall } from '../assets/LogoSmall'
import { ContractWrapper } from './contract-wrapper'

import './contract.scss'

const packageFeatures = [
  `One professional photographer.`,
  `One professional videographer.`,
  `All images and video provided to client via customer supplied hard drive.`,
]

const termsConditions = [
  `Upon receiving first draft of edited Video, client agrees to respond back to Radiance Photography Studios with any/all requested modifications or further editing by no more than 14 calendar days after receiving said Video.`,
  `Radiance Photography Studios staff do not require a separate table in the main ballroom during the event. Nonetheless, Client agrees to provide a designated seat and hot meal during the event for all staff members.`,
  `Client agrees to pay for parking fees for all Radiance Photography Studios staff on the day/night of the event.`,
  `Completion Schedule: The printing process can only start once Radiance Photography Studio receives the order list for the required images. Digital processing takes approximately two weeks. Creation of a digital album takes 6-10 weeks, enlargements take 1-2 weeks, and video editing takes 6-10 months or possibly longer when laboratory and schedules are heavy. `,
]

const paymentConditions = [
  `For products & services listed above, Client agrees to pay a fee of $1700.00 to Radiance Photography Studio. `,
  `From this fee, $850.00 is due at the time of signing this Agreement. Any remaining balance must be paid in full no later than 48 hours prior to the start of the event.`,
  `Credit cards, debit cards, temporary checks, and credit card advance checks are NOT acceptable forms of payment. Cash or check made payable to “Radiance Photography Studio.”`,
]

const refundPolicy = [
  `If Client reschedules the event date, Radiance Photography Studio agrees to reschedule its services hereunder to a mutually acceptable date and apply all deposits towards the fees of the rescheduled event. Refunds are at the sole discretion of Radiance Photography Studio. `,
]

const clientRelease = [
  `The client hereby assigns and grants Radiance Photography Studio and its legal representatives the irrevocable and unrestricted right to use and publish photographs of THE CLIENT or in which THE CLIENT may be included, for editorial, trade, advertising or any other purpose and in any manner and medium: to alter the same without restriction: and copyright the same. `,
  `THE CLIENT herby releases Radiance Photography Studio and its legal representatives and assigns from all claims and liability relating to said photographs. It is agreed that may Radiance Photography Studio display and use the photographs and video taken for advertising, display, Radiance Photography Studio website, photography instructional books, store fronts, window displays, studio display, television advertising, Facebook or any other internet promotion, and/or other purposes deemed proper by Radiance Photography Studio.`,
]

const disputeProviso = [
  `In the event that any disagreement, dispute or claim arises among the parties hereto with respect to the enforcement or interpretation of this Agreement or any specific terms and provisions hereof or with respect to whether an alleged breach or default hereof has or has not occurred (collectively, a “dispute”), such dispute shall be settled in accordance with the following procedures:`,
]

const disputeConditons = [
  {
    title: `Meet and Confer`,
    content: `If Client reschedules the event date, Radiance Photography Studio agrees to reschedule its services hereunder to a mutually acceptable date and apply all deposits towards the fees of the rescheduled event. Refunds are at the sole discretion of Radiance Photography Studio. `,
  },
  {
    title: `Mediation`,
    contentA: `a. If the parties are unable to resolve the Dispute within thirty (30) days following the date of receipt of the Dispute Notice by the other parties (the “Meet and Confer Period”), then the parties shall attempt in good faith to settle the Dispute through nonbinding mediation under the Rules of Practice and Procedures (the “Rules”) of Judicial Arbitration and Mediation Services, Inc. (“JAMS”) or, if JAMS is not in existence or otherwise unable to conduct the mediation in Los Angeles County, under the then current Commercial Rules of the American Arbitration Association. A single disinterested third-party mediator shall be selected by JAMS in accordance with its then current Rules The parties to the Dispute shall share the expenses of the mediator and the other costs of mediation on a pro rata basis.`,
    contentB: `b. Any Dispute which cannot be resolved by the parties within sixty (60) days following the end of the Meet and Confer Period, then either party may bring an action at law or in equity to enforce the terms of this Agreement and/or for such remedies as appropriate. Any such action shall be brought exclusively in the courts of the State of California in Los Angeles County, California.`,
  },
]

const genProvisions = [
  `This Agreement constitutes the entire agreement between the parties and supersedes any and all prior oral or written agreements or understandings related to the Event. This Agreement can only be amended with the written consent of both parties. All notices under this agreement shall be in writing to both parties. This Agreement shall be governed by the laws of the State of California. `,
]

const witnessStatement = [
  `In witness thereof, the parties hereto have executed and approved all five (5) pages of this Agreement as of the date set out below. `,
]

export const Contract = ({ printRef }) => {
  return (
    <main ref={printRef}>
      <div
        className='contract-container'
        style={{ display: 'flex' }}
      >
        <div className='contract-top'>
          <div className='contract-top__header-area'>
            <div className='contract-top__logo-wrap'>
              <LogoFL />
            </div>
            <h1 className='contract-top__header'>
              Letter of <br /> Agreement
            </h1>
          </div>
          <div className='contract-top__client'>
            <h2 className='contract-top__client-header'>
              Client
            </h2>
            <div className='contract-top__client-info'>
              <input
                className='client-name'
                placeholder='John and Jane Placeholder'
              />
              <input
                className='client-number'
                placeholder='555 . 321 . 1234'
              />
              <input
                className='client-address-1'
                placeholder='123 Placeholder Wy.'
              />
              <input
                className='client-address-2'
                placeholder='Pleasanton, CA 54321'
              />
            </div>
          </div>
        </div>
        <div className='contract-body'>
          <div className='event'>
            <h2 className='event__header'>Event</h2>
            <div className='event__info'>
              <div className='event__info-row'>
                <span className='label'>name:</span>
                <input
                  type='text'
                  className='event-input'
                  placeholder='Placeholder Event'
                />
              </div>
              <div className='event__info-row'>
                <span className='label'>date:</span>
                <input
                  type='text'
                  className='event-input'
                  placeholder='July 27th, 2021'
                />
              </div>
              <div className='event__info-row'>
                <span className='label'>guests:</span>
                <input
                  type='text'
                  className='event-input'
                  placeholder='100-150 persons'
                />
              </div>
              <div className='event__info-row'>
                <span className='label stressed'>
                  session:
                </span>
                <input
                  type='text'
                  className='event-input stressed'
                  placeholder='9:30am - 3:00pm'
                />
              </div>
            </div>
          </div>
          <div className='proviso main'>
            <textarea className='proviso-text'>
              This Letter of Agreement is between Client
              (listed above) and Radiance Photography Studio
              and relates ONLY to photography and/or
              videography services. This agreement
              supersedes any previous agreement(s) between
              Client and Radiance.
            </textarea>
          </div>
          <div className='package'>
            <h2 className='package__header'>
              Products & Services Included
            </h2>
            <h4 className='package__subheader'>
              <span>
                <LogoSmall />
              </span>
              <input
                type='text'
                placeholder='Red Label Package'
                className='package-level'
              />
            </h4>
            <div className='package__details'>
              <div className='package__row'>
                <span>▪</span>
                <input
                  type='text'
                  placeholder={`${packageFeatures[0]}`}
                  className='feature'
                />
              </div>
              <div className='package__row'>
                <span>▪</span>
                <input
                  type='text'
                  placeholder={`${packageFeatures[1]}`}
                  className='feature'
                />
              </div>
              <div className='package__row'>
                <span>▪</span>
                <input
                  type='text'
                  placeholder={`${packageFeatures[2]}`}
                  className='feature'
                />
              </div>
            </div>
          </div>
        </div>
        <footer className='footer-letter'>
          <div className='footer-letter__content'>
            <div className='number'>310 | 268 | 8222</div>
            {/* <Divider /> */}
            <div className='email'>
              info@radiancephotographystudio.com
            </div>
            {/* <Divider /> */}
            <div className='address'>
              1643 Westwood Blvd <br /> Los Angleles, CA
              90025
            </div>
          </div>
          <div className='footer-letter__bottom-bar' />
        </footer>
      </div>
      <ContractWrapper>
        <div className='terms'>
          <h2 className='terms__header'>
            Terms & Conditions
          </h2>
          <div className='terms-container'>
            {termsConditions.map((tc, idx) => {
              let inputHeight
              if (idx === 1) inputHeight = { height: "var(--size-btn-ms)" }
              if (idx === 2) inputHeight = { height: "var(--size-btn-sm-plus)" }
              if (idx === 3) inputHeight = { height: "var(--size-btn-ml)" }
              
              return (
                <div className='terms-container__row'>
                  <span>▪</span>
                  <textarea
                    className='term-text'
                    style={inputHeight}
                  >
                    {tc}
                  </textarea>
                </div>
              )
            })}
          </div>
        </div>
        <div className='terms'>
          <h2 className='terms__header'>Fee & Payment</h2>
          <h4 className='terms__subheader'>
            <span>
              <LogoSmall />
            </span>
            <input
              type='text'
              placeholder='Red Label Package'
              className='package-level'
            />
          </h4>
          <div className='terms-container'>
            {paymentConditions.map((pc, idx) => {
              let inputHeight = {
                height: 'var(--size-btn-sm)',
              }
              // if (idx === 2 || idx === 1) inputHeight = { height: "var(--size-btn-sm)" }
              if (idx === 3) inputHeight = { height: "var(--size-btn-ml)" }
              return (
                <div className='terms-container__row'>
                  <span>▪</span>
                  <textarea className='term-text' style={inputHeight}>
                    {pc}
                  </textarea>
                </div>
              )
            })}
          </div>
        </div>
      </ContractWrapper>
      <ContractWrapper>
        <div className='terms'>
          <h2 className='terms__header'>
            Rescheduling & Refund Policy
          </h2>
          <div className='terms-container'>
            {refundPolicy.map((rp, idx) => {
              return (
                <div className='terms-container__row'>
                  <span>▪</span>
                  <textarea
                    className='term-text'
                    style={{ height: "var(--size-btn-md)" }}
                  >
                    {rp}
                  </textarea>
                </div>
              )
            })}
          </div>
        </div>
        <div className='terms' style={{ marginTop: "var(--half-vert-margin)" }}>
          <h2 className='terms__header'>Client Release</h2>
          <div className='terms-container'>
            {clientRelease.map((cr, idx) => {
              let inputHeight = idx === 0
                ? { height: "var(--size-btn-lg)" }
                : { height: "var(--size-btn-xl)" }

              return (
                <div className='terms-container__row'>
                  <span>▪</span>
                  <textarea
                    className='term-text'
                    style={inputHeight}
                  >
                    {cr}
                  </textarea>
                </div>
              )
            })}
          </div>
        </div>
      </ContractWrapper>
      <ContractWrapper>
        <div className='terms'>
          <h2 className='terms__header'>
            Dispute Resolution
          </h2>
          <div className='proviso dispute'>
            <textarea className='proviso-text'>
              {disputeProviso[0]}
            </textarea>
          </div>
          <div className='terms-container__row'>
            <span>▪</span>
            <div className='term-with-title-wrap'>
              <h4 className='term-title'>
                {disputeConditons[0].title}
              </h4>
              <textarea className='term-text'>
                {disputeConditons[0].content}
              </textarea>
            </div>
          </div>
          <div
            style={{ height: 'var(--div-margin)' }}
          ></div>
          <div className='terms-container__row'>
            <span>▪</span>
            <div className='term-with-title-wrap'>
              <h4 className='term-title'>
                {disputeConditons[1].title}
              </h4>
              <textarea className='term-text tallest'>
                {disputeConditons[1].contentA}
              </textarea>
              <div
                style={{ height: 'var(--space-md)' }}
              ></div>
              <textarea className='term-text taller'>
                {disputeConditons[1].contentB}
              </textarea>
            </div>
          </div>
        </div>
      </ContractWrapper>
      <ContractWrapper>
        <div className='terms'>
          <h2 className='terms__header'>
            General Provisions & Applicable Law
          </h2>
          <div className='terms-container'>
            {genProvisions.map((gp, idx) => {
              const taller = {
                height: 'var(--text-block-xs)',
              }
              return (
                <>
                  <div className='terms-container__row'>
                    <span>▪</span>
                    <textarea
                      style={taller}
                      className='term-text'
                    >
                      {gp}
                    </textarea>
                  </div>
                  <textarea className='term-text bold' style={{ width: "750px" }}>
                    {witnessStatement[0]}
                  </textarea>
                </>
              )
            })}
          </div>
          <div className='signature'>
            <div className='signature__box'>
              <span className='signature__line left'>
                <div className='label-wrap'>
                  <input
                    className='name'
                    placeholder='Peyman Khazan'
                  />
                  <input
                    className='studio-name'
                    placeholder='Radiance Photography and Videography'
                  />
                </div>
              </span>
              <span className='signature__line right'>
                <div className='label-wrap'>
                  <input
                    className='date'
                    placeholder='Date'
                  />
                </div>
              </span>
            </div>
            <div className='signature__box'>
              <span className='signature__line left'>
                <div className='label-wrap'>
                  <input
                    className='name'
                    placeholder='Client'
                  />
                </div>
              </span>
              <span className='signature__line right'>
                <div className='label-wrap'>
                  <input
                    className='date'
                    placeholder='Date'
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      </ContractWrapper>
    </main>
  )
}
