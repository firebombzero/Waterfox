/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef nsMathMLmunderoverFrame_h___
#define nsMathMLmunderoverFrame_h___

#include "mozilla/Attributes.h"
#include "nsMathMLContainerFrame.h"

//
// <munderover> -- attach an underscript-overscript pair to a base
//

class nsMathMLmunderoverFrame : public nsMathMLContainerFrame {
public:
  NS_DECL_FRAMEARENA_HELPERS

  friend nsIFrame* NS_NewMathMLmunderoverFrame(nsIPresShell* aPresShell, nsStyleContext* aContext);

  virtual nsresult
  Place(DrawTarget*          aDrawTarget,
        bool                 aPlaceOrigin,
        ReflowOutput& aDesiredSize) override;

  NS_IMETHOD
  InheritAutomaticData(nsIFrame* aParent) override;

  NS_IMETHOD
  TransmitAutomaticData() override;

  NS_IMETHOD
  UpdatePresentationData(uint32_t        aFlagsValues,
                         uint32_t        aFlagsToUpdate) override;

  virtual nsresult
  AttributeChanged(int32_t         aNameSpaceID,
                   nsIAtom*        aAttribute,
                   int32_t         aModType) override;

  uint8_t
  ScriptIncrement(nsIFrame* aFrame) override;

protected:
  explicit nsMathMLmunderoverFrame(nsStyleContext* aContext) : nsMathMLContainerFrame(aContext),
                                                               mIncrementUnder(false),
                                                               mIncrementOver(false) {}
  virtual ~nsMathMLmunderoverFrame();

private:
  bool mIncrementUnder;
  bool mIncrementOver;
};


#endif /* nsMathMLmunderoverFrame_h___ */
